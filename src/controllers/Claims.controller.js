import Claim from "../../models/claim";
import models from "../../models";
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

  return str
}

async function claims(req, res) {
  if (!req.body.address)
    api.error(res, "Address missing", 400);
  const address = req.body.address
  try {
    let data = await Claim.find({ address: address });
    const response = data.filter(item => item.amount != '0')
    api.ok(res, response, 200)
  } catch (error) {
    console.log('query is failed to find', error)
    api.error(res, error, 500)
  }
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

      if (currentSwapId <= claim_id) {
        api.error(res, "Claim ID incorrect", 400)
      } else {
        const u_identifier = parseInt(generate(MAX_UNIQUE_VALUE))

        try {
          const responseToAllow = await contracts.setAllowance(claim_id, amount)
          if (responseToAllow.status == false) {
            api.error(res, responseToAllow.error, 500)
            return
          }
          const responseToIdentify = await contracts.setIdentifier(claim_id, u_identifier)
          if (responseToIdentify.status == false) {
            api.error(res, responseToIdentify.error, 500)
            return
          }
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
    api.error(res, error, 400);
  }
}

async function confirm(req, res) {
  if (!req.body.claim_id)
    api.error(res, "Claim id missing", 400);

  if (!req.body.amount)
    api.error(res, "Amount missing", 400);

  if (!req.body.identifier)
    api.error(res, "Identifier missing", 400);

  const claim_id = parseInt(req.body.claim_id)
  const amount = req.body.amount
  const u_identifier = req.body.identifier

  try {
    const data = await Claim.findOne({
      claimId: claim_id,
      u_identifier: u_identifier
    })
    if (data) {
      const remain = contracts.calcAmount(data.amount, amount)
      console.log(data.amount, amount, remain)
      if (data.amount == amount || remain == '0') {
        const response = await Claim.deleteOne({
          claimId: claim_id,
          u_identifier: u_identifier
        })
        api.ok(res, response)
      } else {
        const response = await Claim.updateOne({
          claimId: claim_id,
          u_identifier: u_identifier
        }, { amount: remain })

        api.ok(res, response)
      }
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
  confirm,
  claims,
};
