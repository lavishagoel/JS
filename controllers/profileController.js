const Profile= require("../model/profileModel")

const addProfileDetails= async(req, res)=>{
const {profileImg, experience, githubProfile, codingPlatform, skills, location, achievements}=req.body;
if(!profileImg|| !experience||!githubProfile|| !codingPlatform||!skills||!location||!achievements){
    return res.status(500).json({
        error: "Please add all fields"
    });
}
const newProfile= await newProfile.create({
    profileImg,
    experience,
    githubProfile,
    codingPlatform,
    skills,
    location,
    achievements
})
const profileAdd= await newProfile.save();
return res.status(201).json({
    message: "Data Added Successfully",
    data: profileAdd
})
}
// these are important
