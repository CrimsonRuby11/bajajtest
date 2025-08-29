
const bfhlService = require('../services/bfhl_services');

const processData = async (req, res) => {
    try {
        const { data } = req.body;

        const results = bfhlService.processData(data);

        const response = {
            is_success: true,
            user_id: "prithviraj_sk_08052004",
            email: "skprithviraj8@gmail.com",
            roll_number: "22BIT0164",
            odd_numbers: results.odd_numbers,
            even_numbers: results.even_numbers,
            alphabets: results.alphabets,
            special_characters: results.specialchars,
            sum: results.sum,
            concat_string: results.concatstring
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: error.message
        });
    }
};

module.exports = {
    processData
}