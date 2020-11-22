import mongoose, {
    Schema
} from 'mongoose';

const FavoriteScheme = new Schema({
    word: String,
    type: String,
    definition: String,
    example: String
});

export default mongoose.model('Favorite', FavoriteScheme);