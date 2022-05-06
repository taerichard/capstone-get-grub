import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YFIKJvJ-ojtAPQ4PdsF4F1CsZB_PHaSKwPkF6KQcRtB8E4BUe9T1OxX_3hI-QlV44W4xLNkvBlFa1mv9TGh-ec62LGwcRPkeG_xdun-OIeSMCsFvDjTBpp2mpx76YXYx'
    }
});