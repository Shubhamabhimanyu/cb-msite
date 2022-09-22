import React from 'react'
import './Assets/Rummy.css'
export default function Rummy() {
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-12 p-0">
	
        
        <section className="bg-light py-3" id="howToplay">
          <div className="container">
            <div className="row py-3 py-sm-5">
              <div className="col-md-12 text-center text-sm-start align-self-center">
                <h2 className="text-md-center fw-bold">How <span className="text-blue ">To Play</span></h2>
                <p className="text-muted">Let’s help you in making better decisions on the CardBaazi Online rummy tables. Start off with learning the basics of online rummy with this short introduction to Online Rummy.
</p>
        
              </div>
              
            </div>
          </div>
        </section>
        <h4 className="text-center pt-4 mb-3">Hand Rankings</h4>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2 px-2">Pure Sequence & Impure Sequence</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/sequences.png" />
                </div>
                <div className="d-flex">
                  <p className="text-muted-custom text-center px-2">
                   Three or more cards of the same suit and arranged in consecutive order of ranks is called pure sequence.

                  </p>
                  <p className="text-muted-custom text-center px-2">
                    Three or more cards of the same suit in a numerical order of ascendance with one or more jokers is called impure sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Valid Set & Invalid Set</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/valid-invalid-set.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                   Three or more cards of different suits but same rank. 

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Wild Joker &amp; Printed Joker</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto" src="https://static.cardbaazi.com/msite/assets/images/rummy/joker.png" />
                </div>
                <div className="d-flex">
                  <p className="text-muted-custom text-center px-2">
                    A card randomly picked from the closed deck which can be used to make sets & sequences.

                  </p>
                  <p className="text-muted-custom text-center px-2">
                   A predefined card which has an image of a joker which can be used to make sets & sequences.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">First Drop &amp; Middle Drop</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/drop-and-go.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    <strong>First drop:</strong>
                    When a player decides to leave a game before picking a single card, they lose 20 points.

                    <br />
                    <strong>Middle drop:</strong>
                    When a player decides to leave during a game, after picking one or more cards, they lose 40 points.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* <!--         <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Helper Mode</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/helper-mode.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    Make better decisions at the tables with expert assistance. This mode prompts alerts in case you are
                    making invalid
                    sets/sequences, declarations and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> --> */}
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Value of Cards</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/value-cards.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    Aces, Kings, Queens, Jacks of all suits carry 10 points each

                   2,3,4,5,6,7,8,9,10 carry points equivalent to their rank

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Deals Rummy</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/deals-rummy.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    Deals rummy is similar to Points rummy but with a predetermined number of deals. All players get an equal amount of chips in the beginning. The player with the most number of chips wins the game.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">Pool Rummy</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/pool-rummy.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    In this variant, players pool in their money to play. This game has two versions: 101 & 201 Pool rummy. The gameplay is similar to Points rummy. The last remaining player wins the game once the rest of the players are eliminated after reaching 101 or 201 points.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
