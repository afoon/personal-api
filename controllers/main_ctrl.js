const user = require('../user') ;
const skills = require('../skills');

const changeName = (req,res,next) =>{
    user.name= req.body.name;
    return res.json(user.name)
}

const changeLocation = (req,res,next) =>{
    user.location= req.body.location;
    return res.json(user.location)
}

const createJob = (req,res,next) =>{
    user.occupations.push(req.body.occupations);
    return res.json({occupations: user.occupations})
}
const createHobby = (req,res,next) =>{
    user.hobbies.push(req.body);
    return res.json({hobbies: user.hobbies})
}

const createFamily = (req,res,next) =>{
    user.family.push(req.body);
    return res.json({family: user.family})
}
const createEats = (req,res,next) =>{
    user.restaurants.push(req.body);
    return res.json({restaurants: user.restaurants})
}

const getName = (req,res,next) =>{
    res.json({name: user.name})} ;
const getLocation = (req,res,next) =>{
    res.json({location: user.location})
};
const getOccupations = (req,res,next) =>{
    res.json({occupations: user.occupations})
};
const getLatest = (req,res,next) =>{
    res.json({lastestOccupation: user.occupations[user.occupations.length-1]})
};
const getHobbies = (req,res,next) =>{
    res.json({hobbies: user.hobbies})
};
const getHobbyType = (req,res,next) =>{
 res.json(user.hobbies.filter(hobbies => hobbies.type === req.params.type))
};
const getFamily = (req,res,next) =>{
    res.json({family: user.family})
};
const getFamilyGender = (req,res,next) =>{
    res.json(user.family.filter(gender => gender.gender === req.params.gender))
};
const getRestaurants = (req,res,next) =>{
    res.json({resturants: user.restaurants})
};
const getRestaurantType = (req,res,next) =>{
    res.json(user.restaurants.filter(restaurants => restaurants.type === req.params.type))
};

const getSkills = (req,res,next) =>{
    if (req.query.experience){
    res.json(skills.filter(skill => skill.experience === req.query.experience))
    }
    else{
        res.json(skills)}
    }


module.exports = {
    getName,
    getLocation,
    getOccupations,
    getLatest,
    getHobbies,
    getHobbyType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantType,
    changeName,
    changeLocation,
    createJob,
    createHobby,
    createFamily,
    createEats,
    getSkills
}
