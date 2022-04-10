import mongoose from "mongoose";
const cardSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("Cards", cardSchema);

// const CardSchema = new mongoose.Schema({
//   name: {
//     type: String,
//   },
//   imgUrl: {
//     type: String,
//   },
// });

// export default mongoose.model("Cards", CardSchema);
