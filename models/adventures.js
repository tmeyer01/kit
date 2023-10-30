import mongoose, { Schema } from 'mongoose';

const adventureSchema = new Schema(
  {
    title: String,
    cardDiscription: String,
    cardImage: String,
    cardImageAlt: String,
    eventDiscription: String,
    writeUpPartOne: String,
    writeUpPartTwo: String,
    imageGallery: [{ image: String, alt: String}],
  },
  {
    timestamps: true,
  }
);

const Adventure = mongoose.models.Adventure || mongoose.model('Adventure', adventureSchema);

export default Adventure;

