const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Connect to MongoDB
const url = 'mongodb://127.0.0.1:27017/pcat-test-db'
mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

const PhotoSchema = new schema({
    title: String,
    description: String,
})

const Photo = mongoose.model('Photo', PhotoSchema);

// Photo.create({
//     title: 'test2',
//     description: 'test2',
// })

// Find all photos
//  const read = async () => {
//     var a = await Photo.find({})
//     console.log(a);
    
//  }
//  read()

 // update

//  
//  const update = async () => {
//     var a = await Photo.findByIdAndUpdate(id, {title: "test2 updated", description:"test2 updated"}, {new: true});
//     console.log(a);  
//     }
    
//  update();


// const id = '67ec9700361213b7b41b9ff6'

// const deleteItem = async () => {
//   var x = await  Photo.findByIdAndDelete(id)
// }
// deleteItem()
