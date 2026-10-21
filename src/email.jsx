import { useState } from "react";

function Email() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubscribe(e) {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            const result = await response.json();

            if (!response.ok) {
                setMessage("Error: " + result.message);
            } else {
                setMessage("Success: " + result.message);
                setEmail("");
            }

        } catch (error) {
            setMessage(
                "Unable to connect to the server. Please check your connection and try again."
            );

        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            <div className="sign-up-heading">
                <span>--------------------------------</span>
                <span>Sign-up</span>
            </div>

            <div className="sign-up-container">
                <span>SIGN UP FOR OUR DAILY INSIDER</span>
                <div className="subscribe-content">
                    <form className="subscribe-form" onSubmit={handleSubscribe}>
                        <input className="search" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <button className="subscribe" type="submit" disabled={loading}>Subscribe</button>
                    </form>
                    {message &&
                        (<p className="subscribe-message" role="status">
                            {message}
                        </p>
                        )}
                </div>
            </div>
        </>

    )
}

export default Email;