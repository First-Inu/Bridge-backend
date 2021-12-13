import Claim from "../../models/claim";
import api from "../tools/common";
import contracts from "../web3/contracts"

import Web3 from "web3"
const { v4: uuidv4 } = require('uuid')
import { random } from "lodash";

const MAX_UNIQUE_VALUE = 16

function generate(count) {
  var _sym = '1234567890';
  var str = '';

  for (var i = 0; i < count; i++) {
    str += _sym[parseInt(Math.random() * (_sym.length))];
  }
  if (str[0] == '0')
    return generate(count)
  // base.getID(str, function(err, res) {
  //   if(!res.length) {
  //     k(str)                   // use the continuation
  //   } else generate(count, k)  // otherwise, recurse on generate
  // });
  return str
}

async function add_claim(req, res) {
  if (!req.body.claim_id)
    api.error(res, "Claim id missing", 400);

  if (!req.body.amount)
    api.error(res, "Amount missing", 400);

  if (!req.body.address)
    api.error(res, "Address missing", 400);

  const claim_id = parseInt(req.body.claim_id)
  const amount = req.body.amount
  const address = req.body.address

  try {
    const data = await Claim.findOne({ claimId: claim_id });

    console.log(data)

    if (data) {
      api.error(res, "Claim ID already used", 400);
    } else {
      const currentSwapId = await contracts.getCurrentSwapId()
      console.log(currentSwapId, '-----current swap id')
      if (currentSwapId <= claim_id) {
        api.error(res, "Claim ID incorrect", 400)
      } else {
        const u_identifier = parseInt(generate(MAX_UNIQUE_VALUE))

        try {
          await contracts.setAllowance(claim_id, amount)
          await contracts.setIdentifier(claim_id, u_identifier)
          const response = await Claim.create({
            claimId: claim_id,
            u_identifier: u_identifier,
            amount: amount,
            address: address,
          })

          api.ok(res, response)
        } catch (error) {
          api.error(res, error, 500)
        }
      }
    }
  } catch (error) {
    console.log(error)
    api.error(res, "Claim id failed", 400);
  }
}

async function check_claim(req, res) {
  if (!req.body.claim_id)
    api.error(res, "Claim id missing", 400);

  if (!req.body.amount)
    api.error(res, "Amount missing", 400);

  if (!req.body.u_identifier)
    api.error(res, "Address missing", 400);

  const claim_id = parseInt(req.body.claim_id)
  const amount = req.body.amount
  const u_identifier = req.body.u_identifier

  try {
    const data = await Claim.findOne({
      claimId: claim_id,
      u_identifier: u_identifier
    })
    if (data) {
      api.ok(res, data)
    } else {
      api.error(res, 'no exist', 401)
    }
  } catch (error) {
    console.log(error)
    api.error(res, "Claim id failed", 400);
  }
}

module.exports = {
  add_claim,
  check_claim,
};
