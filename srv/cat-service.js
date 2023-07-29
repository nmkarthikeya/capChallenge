const cds = require('@sap/cds');
console.log("service.js");

module.exports = class CatalogService extends cds.ApplicationService {

    async init() {

        const remote = await cds.connect.to('RemoteService')
        this.on('*', 'Players', (req) => {
            console.log('>> delegating to remote service...')
            return remote.run(req.query)
        })

 
        console.log("init");

        this.before('CREATE', 'Holes', async function (req) {

            console.log("before create");
            var res;

            if (req.data.scrore === '1') {

                req.data.result = "hole in one";

            } else {

                console.log("score" + req.data.score);

                res = req.data.score - req.data.par;

                console.log("res" + res);

                switch (res) {
                    case -3:
                        req.data.result = "albatross";
                        break;
                    case -2:
                        req.data.result = "eagle";
                        break;
                    case -1:
                        req.data.result = "birdie";
                        break;
                    case 0:
                        req.data.result = "par";
                        console.log("result" + req.data.result);
                        break;
                    case 1:
                        req.data.result = "bogey";
                        break;
                    case 2:
                        req.data.result = "double bogey";
                        break;
                    case 3:
                        req.data.result = "triple bogey";
                        break;
                    default:
                        break;
                }

            }



        })



        return super.init()

    }

}

