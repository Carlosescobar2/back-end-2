
const houses = require('./db.json')
let globalId = 4

module.exports = { 
    getAllHouses: (req,res) => { 
        res.status(200).send(houses)
    },
    deleteHouse: (req,res) => { 
        const {id} = req.params
        const index = houses.findIndex((houses) => { 
            return houses.id === +id
        })
        houses.splice(index,1)
        res.status(200).send(houses)
    },
    createHouse: (req,res) => { 
        let {address, price, imageURL} = req.body
        let newHouse = { 
            id:globalId,
            address:address,
            price:+price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req,res) => { 
        let{id} = req.params
        let{type} = req.body
        // console.log('hey')
        let index = houses.findIndex(elem => +elem.id === +id)
        
        if( type === 'plus') { 
        
        houses[index].price += 10000 
            res.status(200).send(houses)
        
        } else if( type === 'minus'){  
            // console.log('hey')
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else
        res.sendStatus(400)
}
} 