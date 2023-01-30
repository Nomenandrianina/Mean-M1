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
                <p>On vous informe que la réparation de votre véhicule est bien terminé .</p>
                <p>Le modèle ${marque} de type ${type} immatriculé ${matricule}  .</p>
                <p>Toute notre équipe vous remerci d'avoir mis votre confiance à notre service</p>
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
