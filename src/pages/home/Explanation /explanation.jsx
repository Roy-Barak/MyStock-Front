import "./explanation.css"
import Lottie from "lottie-react";
import animation from "../../../assests/animation/rainOfDollars2.json"

export default function Explanation() {

    return (

        <div className="explanation">
            <div className="explanation-reasons">
                <div className="explanation-reasons-title">
                    <h2 className="explanation-number-of-user-title">Why My Stock?</h2>
                    {/*<Lottie animationData={animation} className="explanation-reasons-title-animation"/>*/}

                </div>
                <div className="explanation-reason1">
                    <h3 className="explanation-reason-title">Comprehensive Portfolio Management</h3>
                    <p>My Stocks offers a convenient platform for tracking and managing
                        all your stock investments in one place. With a user-friendly interface, you can easily view
                        your
                        portfolio's performance, track stock prices in real-time, and analyze trends, helping you make
                        informed decisions.
                    </p>

                </div>
                <Lottie animationData={animation} className="explanation-reason1-animation"/>
                <div className="explanation-reason2">
                    <h3 className="explanation-reason-title">Suitable for All Levels
                    </h3>
                    <p>
                        Whether you're a seasoned investor or just getting started, My
                        Stocks caters to your needs. The platform provides tools for both beginners and experienced
                        investors, from basic portfolio tracking to advanced analysis features, ensuring that you have
                        the
                        right information to grow your investments.
                    </p>
                </div>
                <div className="explanation-reason3">
                    <h3 className="explanation-reason-title">Up-to-Date Information</h3>
                    <p>With real-time updates and comprehensive data, My Stocks ensures
                        you stay informed about market changes and your portfolio's performance. This helps you react
                        quickly to market conditions and take advantage of opportunities, ultimately improving your
                        investment outcomes.
                    </p>

                </div>
                <Lottie animationData={animation} className="explanation-reason3-animation"/>
            </div>
        </div>

    )
}