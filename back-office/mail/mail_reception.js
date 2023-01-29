const HTML_TEMPLATE = (matricule,marque,type) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>NodeMailer Email Template</title>
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              background-color: #f4f4f4;
            }
            .email {
              width: 80%;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
            }
            .email-header {
              background-color: #3e74cb;
              color: #fff;
              padding: 10px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
              font-size:17px
            }
            .email-footer {
              background-color: #3e74cb;
              color: #fff;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email">
              <div class="email-body">
                <p>Bonjour Mr/Mme</p>
                <p>On est heureux dans l'équipe de GasyReparator de pouvoir contribué à la réparation de votre voiture.</p>
                <p>Cependant, on tient à vous informer que l'on a bien reçu votre voiture immatriculé  ${matricule} ,de la marque  ${marque} et de type ${type}</p>
                <p>On vous informera du diagnostique et de l'évolution de la réparation après la reception du véhicule<p>
                <p>Cordialement</p>
                <p>GasyReparator</p>
              </div>
              <div class="email-footer">
                <p>Copyright © 2022-2023 GasyReparator </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }
module.exports = HTML_TEMPLATE;
