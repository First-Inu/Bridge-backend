function template(plan, fullname, id, expiry_date, emedicalCardBackImageContents) {
  let res;
  switch(plan) {
    case 'WeMedi Lite':
      res = `
      <!DOCTYPE html>
      <html>
      
      <head>
        <style>
          body {
            padding: 0;
            margin: 0;
            width: 709px;
            height: 438px;
          }
      
          .container {
            width: 709px;
            height: 438px;
            background-image: url("data:image/png;base64, ${emedicalCardBackImageContents}");
            position: relative;
          }
          .right-top-container {
            position: absolute;
            top: 32px;
            right: 32px;
            color: #2E3191;
            font-size: 32px;
            font-family: sans-serif;
            text-align: right;
            font-weight: bold;
          }
          p{
            margin: 0px;
          }
          .left-bottom-container {
            position: absolute;
            left: 32px;
            bottom: 32px;
          }
          .name{
            color: #2E3191;
            font-size: 40px;
            font-family: sans-serif;
            font-weight: bold;
            margin-bottom: 24px;
          }
          .expiry_date_label {
            color: #2E3191;
            font-size: 16px;
            font-family: sans-serif;
            margin-right: 16px;
          }
          .expiry_date_text {
            margin-top: 20px;
            color: #2E3191;
            font-size: 24px;
          }
          .expiry_date {
            text-align: left;
          }
        </style>
      </head>
      
      <body>
        <div class="container">
          <div class="right-top-container">
            <p>WeMedi LITE</p>
            <p>${id}</p>
          </div>
          <div class="left-bottom-container">
            <p class="name">${fullname}</p>
            <div class="expiry_date">
              <span class="expiry_date_label">Expiry date</span>
              <span class="expiry_date_text">${expiry_date}</span>
            </div>
          </div>
        </div>
      </body>
      
      </html>
      `
      break;
    case 'WeMedi M1':
      res =  `
            <!DOCTYPE html>
            <html>

            <head>
              <style>
                body {
                  padding: 0;
                  margin: 0;
                  width: 1200px;
                  height: 741px;
                }

                .container {
                  width: 1200px;
                  height: 741px;
                  background-image: url("data:image/png;base64, ${emedicalCardBackImageContents}");
                  position: relative;
                }
                .right-top-container {
                  position: absolute;
                  top: 64px;
                  right: 64px;
                  color: white;
                  font-size: 48px;
                  font-family: sans-serif;
                  text-align: right;
                  font-weight: bold;
                }
                p{
                  margin: 0px;
                }
                .left-bottom-container {
                  position: absolute;
                  left: 64px;
                  bottom: 64px;
                }
                .name{
                  color: white;
                  font-size: 60px;
                  font-family: sans-serif;
                  font-weight: bold;
                  margin-bottom: 24px;
                }
                .expiry_date_label {
                  color: white;
                  font-size: 28px;
                  font-family: sans-serif;
                  margin-right: 16px;
                }
                .expiry_date_text {
                  margin-top: 20px;
                  color: white;
                  font-size: 32px;
                }
                .expiry_date {
                  text-align: left;
                }
              </style>
            </head>

            <body>
              <div class="container">
                <div class="right-top-container">
                  <p>WeMedi M1</p>
                  <p>${id}</p>
                </div>
                <div class="left-bottom-container">
                  <p class="name">${fullname}</p>
                  <div class="expiry_date">
                    <span class="expiry_date_label">Expiry date</span>
                    <span class="expiry_date_text">${expiry_date}</span>
                  </div>
                </div>
              </div>
            </body>

            </html>
              `
      break;
  }
  
  return res;
}
module.exports = {
  template
};