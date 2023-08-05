var gaussian = require('gaussian');

export default function bns(spotPrice, strikePrice, expiryDate, voltality) {
    // Sample input
    let spot = spotPrice;
    let strike = strikePrice;
    let expiry = expiryDate;
    let volt = voltality;
    let int_rate = 6.7138;
    // let div_yld = 0;
    let bns_results ;
    

    //Validation
    var error=null;
    if(isNaN(spot) || isNaN(strike) || isNaN(volt) || isNaN(int_rate)) {
        error = "Invalid Values";
        console.log(error);
    }
    else if(spot < 0 || strike < 0) {
        error = "Spot and Strike should be positive values";
        alert(error);
    }
    else if(volt <0 || volt >100) {
        error = "Voltality should be between 0 - 100";
        alert(error);
    }
    else if(int_rate <0 || int_rate >100) {
        error = "Interest rate should be between 0 - 100";
        alert(error);
    }
    else {			

        
        var date_expiry = new Date(expiry),
        date_now = new Date();
        
        var seconds = Math.floor((date_expiry - (date_now))/1000),
        minutes = Math.floor(seconds/60),
        hours = Math.floor(minutes/60),
        delta_t = (Math.floor(hours/24))/365.0;
        
        volt = volt/100;
        int_rate = int_rate/100;

        

            
            var d1 = (Math.log(spot/strike) + (int_rate + Math.pow(volt,2)/2) * delta_t) / (volt*Math.sqrt(delta_t)),
                d2 = (Math.log(spot/strike) + (int_rate - Math.pow(volt,2)/2) * delta_t) / (volt*Math.sqrt(delta_t));

            var fv_strike = (strike)*Math.exp(-1*int_rate*delta_t);

            //For calculating CDF and PDF using gaussian library. You need gaussian.js library for this.
            var distribution = gaussian(0, 1);

            //Premium Price
            var call_premium = spot * distribution.cdf(d1) - fv_strike * distribution.cdf(d2),
                put_premium = fv_strike * distribution.cdf(-1*d2) - spot * distribution.cdf(-1*d1);
            //Option greeks
            var call_delta = distribution.cdf(d1),
                put_delta = call_delta-1;

            var call_gamma = distribution.pdf(d1)/(spot*volt*Math.sqrt(delta_t)),
                put_gamma = call_gamma; 

            var call_vega = spot*distribution.pdf(d1)*Math.sqrt(delta_t)/100,
                put_vega = call_vega;

            var call_theta = (-1*spot*distribution.pdf(d1)*volt/(2*Math.sqrt(delta_t)) - int_rate*fv_strike*distribution.cdf(d2))/365,
                put_theta = (-1*spot*distribution.pdf(d1)*volt/(2*Math.sqrt(delta_t)) + int_rate*fv_strike*distribution.cdf(-1*d2))/365;

            var call_rho = fv_strike*delta_t*distribution.cdf(d2)/100,
                put_rho = -1*fv_strike*delta_t*distribution.cdf(-1*d2)/100;
            
            bns_results = {
                "call_option_prem_value": call_premium.toFixed(2),
                "put_option_prem_value": put_premium.toFixed(2),
                "call_option_delta_value": call_delta.toFixed(3),
                "put_option_delta_value": put_delta.toFixed(3),
                "option_gamma_value": call_gamma.toFixed(4),
                "call_option_theta_value": call_theta.toFixed(3),
                "put_option_theta_value": put_theta.toFixed(3),
                "call_option_rho_value": call_rho.toFixed(3),
                "put_option_rho_value": put_rho.toFixed(3),
                "option_vega_value": call_vega.toFixed(3)
            }        
        
    }
    return bns_results;
}



