const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema({
    name: {type: String, required: true},
    room_no: {type: Number, required: true},
    issue_type: {type: String, required: true},
    desc: {type:String, required: true}
})

const Complaint = mongoose.model('Complaint', complaintSchema);
module.exports = Complaint;