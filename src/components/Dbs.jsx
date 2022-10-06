import React from 'react'
import DbsContent from './DbsContent'

export default function Dbs() {
  
  return (
    <>
    <section>
        <div className='dcontainer'>
            {/* <div className='imgh1'>

            <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Unit-377x206.jpg" alt="" className='w-100' />
            </div> */}
            <DbsContent/>
        </div>
    </section>
      
     
    {/* footer  */}
    <footer className='footer'>
    <ul className="nav nav-tabs f-ul" id="pills-tab" role="tablist">
                <li role="presentation">
                    <button  className='btn active' id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-medal" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">Info</button>
                </li>
                <li role="presentation">
                    <button className='btn' id="pills-winnings-tab" data-bs-toggle="pill" data-bs-target="#pills-winnings" type="button" role="tab" aria-controls="pills-winnings" aria-selected="true">Diwali Rewards</button>
                </li>
                <li role="presentation">
                    <button className='btn'  id="pills-cashes-tab" data-bs-toggle="pill" data-bs-target="#pills-cashes" type="button" role="tab" aria-controls="pills-cashes" aria-selected="false">Milestone Challenges</button>
                </li>
                <li role="presentation">
                    <button className='btn' id="pills-cashes-tab" data-bs-toggle="pill" data-bs-target="#pills-leaderboards" type="button" role="tab" aria-controls="pills-cashes" aria-selected="false">Milestone Leaderboard</button>
                </li>
            </ul>
    </footer>
    </>
  )
}
