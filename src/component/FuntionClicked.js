import React, { useState } from 'react';

function FunctionClicked() {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        setSubscribed(true);
    };

    return (
        <div>
            {subscribed ? (
                <div>
                    <h1>Subscribed</h1>
                    <p>Thank you for Subscribing to our Network!</p>
                </div>
            ) : (
                <button onClick={handleSubscribe}>Subscribe</button>
            )}
        </div>
    );
}

export default FunctionClicked;
