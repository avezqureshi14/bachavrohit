import React from 'react'

export const Home = () => {
  return (
    <>
    <sectcion id="Home">
    <b>
      <h1 className="pri">Welcome to Traveling's Bus Booking</h1>
    </b>

<a href="../Bus.html"><b><button className="btn1">Book Now</button></b></a>
  </sectcion>
  <section className="promise">
    <div id="promise">
      <div className="b">
        <img src="../promise.png" alt="" />
        <h1 className="primary">WE PROMISE TO DELIVER</h1>
      </div>
    </div>
  </section>
  <section>
    <div id="container">
      <div className="box">
        <img src="../benefits.png" alt="" />
        <h4>UNMATCHED BENEFITS</h4>
        <p>
          We take care of your travel beyond ticketing by providing you with
          innovative and unique benefits.
        </p>
      </div>
      <div className="box">
        <img src="../lowest_Fare.png" alt="" />
        <h4>LOWEST PRICES</h4>
        <p>
          We always give you the lowest price with the best partner offers.
        </p>
      </div>
      <div className="box">
        <img src="../customer_care.png" alt="" />
        <h4>SUPERVISE CIUSTOMER SERVICES</h4>
        <p>
          We put our experience and relationships to good use and are
          available to solve your travel issues.
        </p>
      </div>
    </div>
  </section>




  <section id="sec1">
    <div className="c1">
      <div className="h">
        <h1>Frequently Asked Questions</h1>
      </div>

      <p>
      <ul>
        <li>
          <h3>Can I book a Government bus ticket on Traveling?</h3>

          <p>
            Yes, you can. But only in maharashtra state(MSRTC).
          </p>


        </li>
        <li>
          <h3> Is it safe to travel by bus in India during the COVID-19 pandemic?</h3>
          <p>
            Traveling, along with bus operators under the Traveling's banner, have been doing a lot when it comes to
            upholding the safety standards that have been set by the Government of India and the MoHFW.
            Passengers can make their bus booking through the redBus platform and travel safely with Traveling.
          </p>
        </li>
        <li>
          <h3> I need to travel with a few family members to my hometown, but COVID-19 is a concern.
            Can I rent a bus solely for my family?</h3>
          <p>
            Yes, you can. You can rent a bus depending on your seating requirement through Bus Hire, Traveling.
            You can even rent a car of your choice through Bus Hire.
          </p>
        </li>
        <li>
          <h3>Which bus categories are available for booking bus ticket?</h3>
          <p>
            There are wide variety of buses in India that one can choose while booking online bus tickets. One can see
            Volvo AC buses, AC Sleeper,
            AC Seater, non-AC Sleeper/Seater, and Semi-sleeper buses. Many the buses offer good legroom, charging
            points, and reading light.
          </p>
        </li>
        <li>
          <h3>Can I track my bus online using Travelling?</h3>
          <p>
            Yes, you can track your bus online using Traveling. To do so, you have to book your bus ticket with redBus.
            You will get the bus number and tracking link 30 mins before your journey, using which you can track the bus
            from your mobile itself.


          </p>
        </li>

      </ul>
      </p>
    </div>
  </section>


  <footer className="f">Copyright@2022</footer>

    </>
  )
}
