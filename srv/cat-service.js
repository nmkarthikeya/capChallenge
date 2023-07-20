const cds = require('@sap/cds');

module.exports = class CatalogService extends cds.ApplicationService {
    init() {

    this.before('CREATE', 'Holes', async function (req) {
        
        var res;

        if (req.data.scrore === '1') {

            req.data.result = "hole in one";

        } else {

            res = req.data.score - req.data.par;

            switch (res) {
                case '-3':
                    req.data.result = "albatross";
                    break;
                case '-2':
                    req.data.result = "eagle";
                    break;
                case '-1':
                    req.data.result = "birdie";
                    break;
                case '0':
                    req.data.result = "par";
                    break;
                case '1':
                    req.data.result = "bogey";
                    break;
                case '2':
                    req.data.result = "double bogey";
                    break;
                case '3':
                    req.data.result = "triple bogey";
                    break;
                default:
                    break;
            }

        }


    })

    }
    
}