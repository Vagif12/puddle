import express from "express";
import {Client} from '@elastic/elasticsearch'
import { v4 as uuidv4 } from 'uuid';
const app = express();
const client = new Client({ node: 'http://localhost:9200', auth: {
  username: 'elastic',
  password: 'changeme'
} })

app.use(express.json());


app.listen(process.env.PORT || 3001, () => {
    console.log("Express Server Initiated")
})

app.get('/health', (req, res) => { 
  res.send({express: 'Successfully connected to Express Server'}); 
}); 

app.post('/api/properties/create', async (req,res) => {
    await client.index({
    index: 'puddle-properties-index',
    body: {
      id: uuidv4(),
      fullAddress: req.body.fullAddress,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      price: req.body.price,
      numBathrooms: req.body.numBathrooms,
      numBedrooms: req.body.numBedrooms,
      type: req.body.type,
      country: req.body.country || 'Ireland',
      propertyType: req.body.propertyType,
      squareFeet: req.body.squareFeet,
      images: req.body.images,
      listedBy: req.body.listedBy,
      county: req.body.county,
      propertyCategory: req.body.propertyCategory,
      contactInfo: req.body.contactInfo,
      energyRating: req.body.energyRating,
      rentPeriod: req.body.rentPeriod,
      facilities: req.body.facilities,
      dateModified: new Date().toLocaleString('ie').split(',')[0],
      videos: req.body.videos
    }
  }).then(resp => {
      return res.status(200).send(`Indexed Successfully Created. Status code: ${resp.statusCode}`);
  }).catch(err => {
      return res.status(500).send(`An error occured when creating the index: ${err}`)
  })
});

app.get('/api/properties/search', async (req,res) => {
    if (((req.query.fullAddress == '') || req.query.fullAddress == undefined) && (req.query.county == 'County')) {
        console.log('hhh')
        {
             await client.search({
        index: 'puddle-properties-index',
        body: {
            
            query: {
            bool: {
                must: [
                    {
                        match_phrase: { type: req.query.type },
                    },
                    {
                        match: { propertyCategory: req.query.propertyCategory },
                    },
                ]
           

            }
            }
        }
        }).then(resp => {
            return res.status(200).json(resp);
        }).catch(err => {
            return res.status(500).send(err);
        })

        }
    }
    else if (req.query.fullAddress == '') {
        {
             await client.search({
        index: 'puddle-properties-index',
        body: {
            
            query: {
            bool: {
                must: [
                    {
                        match_phrase: { type: req.query.type },
                    },
                    {
                        match: { county: req.query.county.trim() },
                    },
                    {
                        match: { propertyCategory: req.query.propertyCategory },
                    },
                ]
           

            }
            }
        }
        }).then(resp => {
            return res.status(200).json(resp);
        }).catch(err => {
            return res.status(500).send(err);
        })

        }
    }
    else if (req.query.county == 'County') {
        await client.search({
        index: 'puddle-properties-index',
        body: {
            
            query: {
            bool: {
                must: [
                    {
                        match: { fullAddress: req.query.fullAddress.trim() },
                    },
                    {
                        match_phrase: { type: req.query.type },
                    },
                    {
                        match: { propertyCategory: req.query.propertyCategory },
                    },
                ]
           

            }
            }
        }
        }).then(resp => {
            return res.status(200).json(resp);
        }).catch(err => {
            return res.status(500).send(err);
        })
        } else {
             await client.search({
        index: 'puddle-properties-index',
        body: {
            
            query: {
            bool: {
                must: [
                    {
                        match: { fullAddress: req.query.fullAddress.trim() },
                    },
                    {
                        match_phrase: { type: req.query.type },
                    },
                    {
                        match: { county: req.query.county.trim() },
                    },
                    {
                        match: { propertyCategory: req.query.propertyCategory },
                    },
                ]
           

            }
            }
        }
        }).then(resp => {
            return res.status(200).json(resp);
        }).catch(err => {
            return res.status(500).send(err);
        })

        }
    
    
});

app.get('/api/properties/find', async (req,res) => {
    await client.search({
        index: 'puddle-properties-index',
        body: {
            
            query: {
            bool: {
                must: [ 
                    {
                        match: { id: req.query.id },
                    },
                ]
           

            }
            }
        }
        }).then(resp => {
            return res.status(200).json(resp);
        }).catch(err => {
            return res.status(500).send(err);
        })
});
