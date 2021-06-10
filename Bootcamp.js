const mongoose = require('mongoose');
//const { model } = require('mongoose');

const BootcampSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, 'Name is required'],
        unique: true,
        trim: true,
        maxlength: [50, 'name cannot be more then 50 char']

    },
    slug: String,
    description: {
        type: String,
        require: [true, 'Add Description is required'],
        maxlength: [500, 'Description cannot be more then 500 char']

    },
    website: {
        type: String,
        match: [/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/, 'please enter valid URL']


    },

    email: {
        type: String,
        match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, 'please enter valid email']


    },
    address: {
        type: String,
        required: [true, 'Add address']
    },
    location: {
        //geo json point
        type: {
            type: String,
            enum: ['Point'],
            required: false
        }, coordinates: {
            type: [Number],
            required: false,
            index: '2dsphere'

        }
    },
    formatttedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    contry: String,
    careers: {
        type: [String],
        required: true,
        enum: [
            'web development',
            'UI/UX',
            'mobile development',
            'data science',
            'Business',
            'Others'

        ]
    },

    averageRating: {
        type: Number,
        min: [1, 'Min rating should be one'],
        max: [10, 'max rating should be ten'],

    },
    averageCost: {
        type: Number,
    },
    phote: {
        type: String,
        default: 'no_photo.jpg'
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },



});

module.exports = mongoose.model('Bootcamp', BootcampSchema);