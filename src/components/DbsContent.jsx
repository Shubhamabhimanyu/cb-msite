import React from 'react';
import {Link} from 'react-router-dom';


export default function DbsContent() {
  return (
    <>
    <div class="container ">
        <div className='dbs-icon'>
            <Link to="/path">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-left.png" alt=''/>

            </Link>

        </div>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-medal" role="tabpanel" aria-labelledby="pills-medal-tab">
                    {/* <!-- --- --> */}
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/1_Prize-Distribution.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                    {/* <!-- ------ --> */}
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/2_Daily-Leaderboard_Coming-Soon.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>

                    {/* <!-- <div class="sliderimg">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="padding-top: 20%;">
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/CB.png" class="gameimg" alt="...">
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Dehla-Pakad.png" class="gameimg" alt="...">
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Poker.png" class="gameimg" alt="...">
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Pool-51.png" class="gameimg" alt="...">
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Rummy.png" class="gameimg" alt="...">
                                </div>
                              </div>
                              <div class="carousel-item">
                                <div class="slide-box">
                                    <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/T23.png" class="gameimg" alt="...">
                                </div>
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style="padding-top: 20%;">
                              <span class="carousel-control-prev-icon arrow" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style="padding-top: 20%;">
                              <span class="carousel-control-next-icon arrow" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>

                    </div> --> */}
                    {/* <!-- ----- --> */}
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/3_Diwali-Rewards-v2.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                    {/* <!-- ---- --> */}
                   
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/4_Milestone-2709.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                    <div onclick="openScreen('Home')" class="button">
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Milestone-2.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Milestone-3.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                </div>
                {/* <!-- diwali rewards tab --> */}
                <div class="tab-pane fade" id="pills-winnings" role="tabpanel" aria-labelledby="pills-winnings-tab">
                    <div>
                        <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/DR_1.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                    </div>
                        <div onclick="openScreen('DrawerRewards')" class="button">
                              <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/DR_2.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                        </div>
                        <div><img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/DR_3.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                        </div>
                </div>

              {/* <!-- Milestone-Challenges tab --> */}
                <div class="tab-pane fade" id="pills-cashes" role="tabpanel" aria-labelledby="pills-winnings-tab">

                    <ul class="nav nav-pills  custom-main-tabs ul2 my-2" id="pills-tab" role="tablist">
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-info-sub-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">Info</button>
                        </li>
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link fw-bold xyz box2-btn font" id="pills-winnings-tab" data-bs-toggle="pill" data-bs-target="#pills-ppc" type="button" role="tab" aria-controls="pills-winnings" aria-selected="true"> Pro Player challenge</button>
                        </li>
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link fw-bold box2-btn font" id="pills-cashes-tab" data-bs-toggle="pill" data-bs-target="#pills-spc" type="button" role="tab" aria-controls="pills-cashes" aria-selected="false">Safe Player challenge</button>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-info-sub-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">
                        <div>
                            <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Milestone-Challenges_26_Sep_(1).jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                        </div>
                        <div style={{textAlign:"center"}} class="my-5" onclick="openScreen('Home')">
                            <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Start-Playing.png" alt=""/>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">
                        <ul class="nav nav-pills scrollable-tabs custom-main-tabs my-2" id="pills-tab" role="tablist">
                            <li class="nav-item " role="presentation">
                                <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date29-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">23rd-29th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date27-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">21st-27th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date26-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">20th-26th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date25-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">19th-25th September</button>
                            </li>
                          
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date24-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">18th-24th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date23-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">17th-23rd September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date22-tab-ppc" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">16th-22nd September</button>
                            </li>
                         {/* <!--     <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date21-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">15th-21st September</button>
                            </li>
                          <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date20-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">14th-20th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date19-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">13th-19th September</button>
                            </li>
                          <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date18-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">12th-18th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date17-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">11th-17th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date16-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">10th-16th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date15-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">9th-15th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date11-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">5th-11th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date10-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">4th-10th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date9-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">3rd-9th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date8-tab-ppc" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">2nd-8th September</button>
                            </li> --> */}
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                           <div class="tab-pane fade active show" id="pills-date29-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>deepaksingh7232</td>
                        <td>2236</td>
                        </tr>
                        <tr>
                        <td>Shirrish</td>
                        <td>2146</td>
                        </tr>
                        <tr>
                        <td>kathy123</td>
                        <td>1727</td>
                        </tr>
                        <tr>
                        <td>Kuldeep1326</td>
                        <td>1723</td>
                        </tr>
                        <tr>
                        <td>adhuadhwin</td>
                        <td>1578</td>
                        </tr>
                        <tr>
                        <td>haren8811</td>
                        <td>1533</td>
                        </tr>
                        <tr>
                        <td>Devendra62</td>
                        <td>1512</td>
                        </tr>
                        <tr>
                        <td>shahrukhssdggjk</td>
                        <td>952</td>
                        </tr>
                        <tr>
                        <td>selingzx</td>
                        <td>817</td>
                        </tr>
                        <tr>
                        <td>Ravichandira</td>
                        <td>795</td>
                        </tr>
                        <tr>
                        <td>Basavaraja</td>
                        <td>621</td>
                        </tr>
                        <tr>
                        <td>9810000000</td>
                        <td>595</td>
                        </tr>
                        <tr>
                        <td>Shaikh9860</td>
                        <td>428</td>
                        </tr>
                        <tr>
                        <td>Raviramar255</td>
                        <td>414</td>
                        </tr>
                        <tr>
                        <td>Fattu211293</td>
                        <td>386</td>
                        </tr>
                        <tr>
                        <td>Periyalakkan</td>
                        <td>318</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date27-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>mani00700</td>
                        <td>742</td>
                        </tr>
                        <tr>
                        <td>Keshvi</td>
                        <td>644</td>
                        </tr>
                        <tr>
                        <td>rameshraj102</td>
                        <td>499</td>
                        </tr>
                        <tr>
                        <td>ABtandi13705</td>
                        <td>418</td>
                        </tr>
                        <tr>
                        <td>akibaazi</td>
                        <td>296</td>
                        </tr>
                        <tr>
                        <td>Swapan11</td>
                        <td>243</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date26-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>DeepanDee</td>
                        <td>2992</td>
                        </tr>
                        <tr>
                        <td>Imliakum</td>
                        <td>1926</td>
                        </tr>
                        <tr>
                        <td>Gudduk</td>
                        <td>1265</td>
                        </tr>
                        <tr>
                        <td>mahendra1987</td>
                        <td>1096</td>
                        </tr>
                        <tr>
                        <td>albertlj</td>
                        <td>1080</td>
                        </tr>
                        <tr>
                        <td>Suganyaselva</td>
                        <td>941</td>
                        </tr>
                        <tr>
                        <td>anupsamaddar</td>
                        <td>897</td>
                        </tr>
                        <tr>
                        <td>luna123</td>
                        <td>889</td>
                        </tr>
                        <tr>
                        <td>rummybaaz</td>
                        <td>879</td>
                        </tr>
                        <tr>
                        <td>Viji1979</td>
                        <td>872</td>
                        </tr>
                        <tr>
                        <td>Raju1207</td>
                        <td>792</td>
                        </tr>
                        <tr>
                        <td>Muku0405</td>
                        <td>739</td>
                        </tr>
                        <tr>
                        <td>RuchangAbhi</td>
                        <td>719</td>
                        </tr>
                        <tr>
                        <td>Looserr</td>
                        <td>708</td>
                        </tr>
                        <tr>
                        <td>soren2222</td>
                        <td>694</td>
                        </tr>
                        <tr>
                        <td>kuttusinu</td>
                        <td>633</td>
                        </tr>
                        <tr>
                        <td>bhaghaji</td>
                        <td>630</td>
                        </tr>
                        <tr>
                        <td>Zzzack89</td>
                        <td>626</td>
                        </tr>
                        <tr>
                        <td>murali24340</td>
                        <td>605</td>
                        </tr>
                        <tr>
                        <td>Vibhavijay85</td>
                        <td>593</td>
                        </tr>
                        <tr>
                        <td>9810000000</td>
                        <td>540</td>
                        </tr>
                        <tr>
                        <td>Binsappi</td>
                        <td>486</td>
                        </tr>
                        <tr>
                        <td>Rameshpanwar</td>
                        <td>467</td>
                        </tr>
                        <tr>
                        <td>Anita913</td>
                        <td>465</td>
                        </tr>
                        <tr>
                        <td>kkmodi</td>
                        <td>461</td>
                        </tr>
                        <tr>
                        <td>Ramniwas1998</td>
                        <td>429</td>
                        </tr>
                        <tr>
                        <td>Salmanhaliza</td>
                        <td>426</td>
                        </tr>
                        <tr>
                        <td>Shishupal123</td>
                        <td>406</td>
                        </tr>
                        <tr>
                        <td>MV2020</td>
                        <td>388</td>
                        </tr>
                        <tr>
                        <td>gpatre</td>
                        <td>356</td>
                        </tr>
                        <tr>
                        <td>Sreejithkv</td>
                        <td>242</td>
                        </tr>
                        <tr>
                        <td>shaktioraon</td>
                        <td>153</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                          
                           <div class="tab-pane fade" id="pills-date25-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>jghshwhgdhus</td>
                        <td>1905</td>
                        </tr>
                        <tr>
                        <td>Baraiya1990</td>
                        <td>924</td>
                        </tr>
                        <tr>
                        <td>Sushmagrg</td>
                        <td>734</td>
                        </tr>
                        <tr>
                        <td>Tejahunsur</td>
                        <td>725</td>
                        </tr>
                        <tr>
                        <td>Lenin143</td>
                        <td>490</td>
                        </tr>
                        <tr>
                        <td>Simbu198983</td>
                        <td>334</td>
                        </tr>
                        <tr>
                        <td>Pradipp250</td>
                        <td>330</td>
                        </tr>
                        <tr>
                        <td>Gajju2955</td>
                        <td>190</td>
                        </tr>
                        <tr>
                        <td>Mukeshlal</td>
                        <td>170</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date24-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>SURESHA</td>
                        <td>1354</td>
                        </tr>
                        <tr>
                        <td>Pintya1243</td>
                        <td>924</td>
                        </tr>
                        <tr>
                        <td>lalit18</td>
                        <td>903</td>
                        </tr>
                        <tr>
                        <td>Pavanpjadhao</td>
                        <td>831</td>
                        </tr>
                        <tr>
                        <td>BJP123</td>
                        <td>771</td>
                        </tr>
                        <tr>
                        <td>Aqib123</td>
                        <td>694</td>
                        </tr>
                        <tr>
                        <td>ramnarayanan</td>
                        <td>614</td>
                        </tr>
                        <tr>
                        <td>Kapilta</td>
                        <td>329</td>
                        </tr>
                        <tr>
                        <td>papu2002</td>
                        <td>222</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                            <div class="tab-pane fade" id="pills-date23-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>bhawani143</td>
                        <td>1460</td>
                        </tr>
                        <tr>
                        <td>Kumarmanoj29</td>
                        <td>1304</td>
                        </tr>
                        <tr>
                        <td>subin3415</td>
                        <td>1022</td>
                        </tr>
                        <tr>
                        <td>Andisamy9786</td>
                        <td>833</td>
                        </tr>
                        <tr>
                        <td>omjain</td>
                        <td>764</td>
                        </tr>
                        <tr>
                        <td>sanketjoshi</td>
                        <td>746</td>
                        </tr>
                        <tr>
                        <td>9810015704</td>
                        <td>672</td>
                        </tr>
                        <tr>
                        <td>Vijendersheo</td>
                        <td>665</td>
                        </tr>
                        <tr>
                        <td>Prakashjoshi</td>
                        <td>609</td>
                        </tr>
                        <tr>
                        <td>Salma1991</td>
                        <td>584</td>
                        </tr>
                        <tr>
                        <td>Sriingale</td>
                        <td>560</td>
                        </tr>
                        <tr>
                        <td>Ashu89</td>
                        <td>528</td>
                        </tr>
                        <tr>
                        <td>jain0707</td>
                        <td>520</td>
                        </tr>
                        <tr>
                        <td>Pranalk</td>
                        <td>486</td>
                        </tr>
                        <tr>
                        <td>gundaraj</td>
                        <td>440</td>
                        </tr>
                        <tr>
                        <td>balukamble</td>
                        <td>373</td>
                        </tr>
                        <tr>
                        <td>pappu0405</td>
                        <td>358</td>
                        </tr>
                        <tr>
                        <td>789456</td>
                        <td>346</td>
                        </tr>
                        <tr>
                        <td>Angelinmercy</td>
                        <td>315</td>
                        </tr>
                        <tr>
                        <td>p0nnu</td>
                        <td>305</td>
                        </tr>
                        <tr>
                        <td>viju24</td>
                        <td>302</td>
                        </tr>
                        <tr>
                        <td>Amidustu</td>
                        <td>258</td>
                        </tr>
                        <tr>
                        <td>Mahender</td>
                        <td>217</td>
                        </tr>
                        <tr>
                        <td>Nilesh2303</td>
                        <td>212</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                            <div class="tab-pane fade" id="pills-date22-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>pappu0405</td>
                        <td>1648</td>
                        </tr>
                        <tr>
                        <td>sanketjoshi</td>
                        <td>1634</td>
                        </tr>
                        <tr>
                        <td>gamer1</td>
                        <td>1333</td>
                        </tr>
                        <tr>
                        <td>Andisamy9786</td>
                        <td>1234</td>
                        </tr>
                        <tr>
                        <td>Pranalk</td>
                        <td>1030</td>
                        </tr>
                        <tr>
                        <td>789456</td>
                        <td>786</td>
                        </tr>
                        <tr>
                        <td>Prakashjoshi</td>
                        <td>726</td>
                        </tr>
                        <tr>
                        <td>Ishwarkumawa</td>
                        <td>657</td>
                        </tr>
                        <tr>
                        <td>Kumarmanoj29</td>
                        <td>648</td>
                        </tr>
                        <tr>
                        <td>Lovely143</td>
                        <td>371</td>
                        </tr>
                        <tr>
                        <td>gundaraj</td>
                        <td>326</td>
                        </tr>
                        <tr>
                        <td>Amidustu</td>
                        <td>314</td>
                        </tr>
                        <tr>
                        <td>Pkb1993</td>
                        <td>313</td>
                        </tr>
                        <tr>
                        <td>Sriingale</td>
                        <td>302</td>
                        </tr>
                        <tr>
                        <td>bhawani143</td>
                        <td>285</td>
                        </tr>
                        <tr>
                        <td>balukamble</td>
                        <td>284</td>
                        </tr>
                        <tr>
                        <td>Pundlik8555</td>
                        <td>272</td>
                        </tr>
                        <tr>
                        <td>Suganthipand</td>
                        <td>269</td>
                        </tr>
                        <tr>
                        <td>viju24</td>
                        <td>225</td>
                        </tr>
                        <tr>
                        <td>Salma1991</td>
                        <td>177</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                            <div class="tab-pane fade" id="pills-date21-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Dip93k</td>
                        <td>1049</td>
                        </tr>
                        <tr>
                        <td>jatdevta0551</td>
                        <td>978</td>
                        </tr>
                        <tr>
                        <td>1indian</td>
                        <td>815</td>
                        </tr>
                        <tr>
                        <td>Sureshahire</td>
                        <td>609</td>
                        </tr>
                        <tr>
                        <td>Basavaraja</td>
                        <td>539</td>
                        </tr>
                        <tr>
                        <td>Samsuibu</td>
                        <td>402</td>
                        </tr>
                        <tr>
                        <td>pritichavan1</td>
                        <td>281</td>
                        </tr>
                        <tr>
                        <td>pronil</td>
                        <td>233</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                          
                          <div class="tab-pane fade" id="pills-date20-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Shirrish</td>
                        <td>1612</td>
                        </tr>
                        <tr>
                        <td>deepumg</td>
                        <td>1499</td>
                        </tr>
                        <tr>
                        <td>SKGAUTAM</td>
                        <td>1408</td>
                        </tr>
                        <tr>
                        <td>Vinit1995</td>
                        <td>1263</td>
                        </tr>
                        <tr>
                        <td>mani00700</td>
                        <td>879</td>
                        </tr>
                        <tr>
                        <td>Khamshani</td>
                        <td>479</td>
                        </tr>
                        <tr>
                        <td>adp029</td>
                        <td>385</td>
                        </tr>
                        <tr>
                        <td>Chandrasheka</td>
                        <td>336</td>
                        </tr>
                        <tr>
                        <td>Kiranbari</td>
                        <td>259</td>
                        </tr>
                        <tr>
                        <td>bunny1404</td>
                        <td>201</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                          <div class="tab-pane fade" id="pills-date19-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>bhaghaji</td>
                        <td>722</td>
                        </tr>
                        <tr>
                        <td>Viji1979</td>
                        <td>681</td>
                        </tr>
                        <tr>
                        <td>Salmanhaliza</td>
                        <td>515</td>
                        </tr>
                        <tr>
                        <td>nijut</td>
                        <td>359</td>
                        </tr>
                        <tr>
                        <td>sonisaini</td>
                        <td>352</td>
                        </tr>
                        <tr>
                        <td>abhimny</td>
                        <td>260</td>
                        </tr>
                        <tr>
                        <td>Bhavesh05</td>
                        <td>211</td>
                        </tr>
                        <tr>
                        <td>Najeemsujith</td>
                        <td>186</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date18-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>kathy123</td>
                        <td>2247</td>
                        </tr>
                        <tr>
                        <td>Imliakum</td>
                        <td>1964</td>
                        </tr>
                        <tr>
                        <td>Devendra62</td>
                        <td>1277</td>
                        </tr>
                        <tr>
                        <td>mahendra1987</td>
                        <td>1274</td>
                        </tr>
                        <tr>
                        <td>Shishupal123</td>
                        <td>1183</td>
                        </tr>
                        <tr>
                        <td>sachinc321</td>
                        <td>1135</td>
                        </tr>
                        <tr>
                        <td>kailasgavhar</td>
                        <td>1068</td>
                        </tr>
                        <tr>
                        <td>Amit12372</td>
                        <td>934</td>
                        </tr>
                        <tr>
                        <td>Kuldeep1326</td>
                        <td>929</td>
                        </tr>
                        <tr>
                        <td>murali24340</td>
                        <td>857</td>
                        </tr>
                        <tr>
                        <td>Manojdon1</td>
                        <td>760</td>
                        </tr>
                        <tr>
                        <td>Rameshpanwar</td>
                        <td>753</td>
                        </tr>
                        <tr>
                        <td>kkmodi</td>
                        <td>750</td>
                        </tr>
                        <tr>
                        <td>rummybaaz</td>
                        <td>731</td>
                        </tr>
                        <tr>
                        <td>kuttusinu</td>
                        <td>728</td>
                        </tr>
                        <tr>
                        <td>Suganyaselva</td>
                        <td>715</td>
                        </tr>
                        <tr>
                        <td>anupsamaddar</td>
                        <td>707</td>
                        </tr>
                        <tr>
                        <td>luna123</td>
                        <td>693</td>
                        </tr>
                        <tr>
                        <td>Ramniwas1998</td>
                        <td>625</td>
                        </tr>
                        <tr>
                        <td>jignesh5448</td>
                        <td>589</td>
                        </tr>
                        <tr>
                        <td>Zzzack89</td>
                        <td>557</td>
                        </tr>
                        <tr>
                        <td>Chiragbari</td>
                        <td>513</td>
                        </tr>
                        <tr>
                        <td>Johnjebaraj</td>
                        <td>489</td>
                        </tr>
                        <tr>
                        <td>Raju1207</td>
                        <td>464</td>
                        </tr>
                        <tr>
                        <td>rameshraj102</td>
                        <td>460</td>
                        </tr>
                        <tr>
                        <td>gpatre</td>
                        <td>456</td>
                        </tr>
                        <tr>
                        <td>Sidak16</td>
                        <td>389</td>
                        </tr>
                        <tr>
                        <td>Sreejithkv</td>
                        <td>331</td>
                        </tr>
                        <tr>
                        <td>vijaykaushal</td>
                        <td>310</td>
                        </tr>
                        <tr>
                        <td>MV2020</td>
                        <td>254</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                          <div class="tab-pane fade" id="pills-date17-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Pavanpjadhao</td>
                        <td>1043</td>
                        </tr>
                        <tr>
                        <td>Bunty445</td>
                        <td>946</td>
                        </tr>
                        <tr>
                        <td>Muneebkhan</td>
                        <td>649</td>
                        </tr>
                        <tr>
                        <td>SURESHA</td>
                        <td>635</td>
                        </tr>
                        <tr>
                        <td>ramnarayanan</td>
                        <td>540</td>
                        </tr>
                        <tr>
                        <td>7990000000</td>
                        <td>477</td>
                        </tr>
                        <tr>
                        <td>papu2002</td>
                        <td>359</td>
                        </tr>
                        <tr>
                        <td>Pandiv</td>
                        <td>338</td>
                        </tr>
                        <tr>
                        <td>Periyalakkan</td>
                        <td>228</td>
                        </tr>
                        <tr>
                        <td>Sushmagrg</td>
                        <td>1097</td>
                        </tr>
                        <tr>
                        <td>Hello123456</td>
                        <td>806</td>
                        </tr>
                        <tr>
                        <td>haren8811</td>
                        <td>772</td>
                        </tr>
                        <tr>
                        <td>wmm123</td>
                        <td>537</td>
                        </tr>
                        <tr>
                        <td>Swapbari</td>
                        <td>519</td>
                        </tr>
                        <tr>
                        <td>Baraiya1990</td>
                        <td>510</td>
                        </tr>
                        <tr>
                        <td>jghshwhgdhus</td>
                        <td>385</td>
                        </tr>
                        <tr>
                        <td>Surisuri123</td>
                        <td>338</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                          <div class="tab-pane fade" id="pills-date16-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Pavanpjadhao</td>
                        <td>1043</td>
                        </tr>
                        <tr>
                        <td>Bunty445</td>
                        <td>946</td>
                        </tr>
                        <tr>
                        <td>Muneebkhan</td>
                        <td>649</td>
                        </tr>
                        <tr>
                        <td>SURESHA</td>
                        <td>635</td>
                        </tr>
                        <tr>
                        <td>ramnarayanan</td>
                        <td>540</td>
                        </tr>
                        <tr>
                        <td>7990000000</td>
                        <td>477</td>
                        </tr>
                        <tr>
                        <td>papu2002</td>
                        <td>359</td>
                        </tr>
                        <tr>
                        <td>Pandiv</td>
                        <td>338</td>
                        </tr>
                        <tr>
                        <td>Periyalakkan</td>
                        <td>228</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date15-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">No. of Game Plays</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Shaikh9860</td>
                        <td>1822</td>
                        </tr>
                        <tr>
                        <td>Kumarmanoj29</td>
                        <td>1674</td>
                        </tr>
                        <tr>
                        <td>sanketjoshi</td>
                        <td>1475</td>
                        </tr>
                        <tr>
                        <td>Umang12</td>
                        <td>1450</td>
                        </tr>
                        <tr>
                        <td>Ishwarkumawa</td>
                        <td>1391</td>
                        </tr>
                        <tr>
                        <td>NARENDRAgoud</td>
                        <td>1304</td>
                        </tr>
                        <tr>
                        <td>parvinchavda</td>
                        <td>1236</td>
                        </tr>
                        <tr>
                        <td>Andisamy9786</td>
                        <td>1121</td>
                        </tr>
                        <tr>
                        <td>Pranalk</td>
                        <td>942</td>
                        </tr>
                        <tr>
                        <td>gamer1</td>
                        <td>933</td>
                        </tr>
                        <tr>
                        <td>Rasulkhan</td>
                        <td>790</td>
                        </tr>
                        <tr>
                        <td>Prakashjoshi</td>
                        <td>726</td>
                        </tr>
                        <tr>
                        <td>Fattu211293</td>
                        <td>618</td>
                        </tr>
                        <tr>
                        <td>Ashu89</td>
                        <td>575</td>
                        </tr>
                        <tr>
                        <td>789456</td>
                        <td>457</td>
                        </tr>
                        <tr>
                        <td>Kalpeshbari</td>
                        <td>400</td>
                        </tr>
                        <tr>
                        <td>pemasher</td>
                        <td>282</td>
                        </tr>
                        <tr>
                        <td>Jagannath1</td>
                        <td>220</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                            <div class="tab-pane fade" id="pills-date11-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">No. of Game Plays</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>letthatmelts</td>
                                                    <td>7444</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Zzzack89</td>
                                                    <td>5383</td>
                                                    </tr>
                                                    <tr>
                                                    <td>joker141</td>
                                                    <td>4191</td>
                                                    </tr>
                                                    <tr>
                                                    <td>skmoond</td>
                                                    <td>4181</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rohit0008124</td>
                                                    <td>4079</td>
                                                    </tr>
                                                    <tr>
                                                    <td>xyzfc</td>
                                                    <td>3706</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rao1596</td>
                                                    <td>3549</td>
                                                    </tr>
                                                    <tr>
                                                    <td>badshahumai</td>
                                                    <td>3355</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sjgupta1981</td>
                                                    <td>2763</td>
                                                    </tr>
                                                    <tr>
                                                    <td>meena56</td>
                                                    <td>2415</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kathy123</td>
                                                    <td>2260</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kkmodi</td>
                                                    <td>2221</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hargovind123</td>
                                                    <td>2193</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manuprasadvr</td>
                                                    <td>2107</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pattiking</td>
                                                    <td>1965</td>
                                                    </tr>
                                                    <tr>
                                                    <td>omjain</td>
                                                    <td>1862</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhaja</td>
                                                    <td>1859</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jogamer</td>
                                                    <td>1810</td>
                                                    </tr>
                                                    <tr>
                                                    <td>procardbaaz</td>
                                                    <td>1715</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahendra1987</td>
                                                    <td>1704</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sk7806</td>
                                                    <td>1648</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Controlaa</td>
                                                    <td>1595</td>
                                                    </tr>
                                                    <tr>
                                                    <td>balukgm</td>
                                                    <td>1560</td>
                                                    </tr>
                                                    <tr>
                                                    <td>adhuadhwin</td>
                                                    <td>1468</td>
                                                    </tr>
                                                    <tr>
                                                    <td>suryamishra</td>
                                                    <td>1434</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Suganyaselva</td>
                                                    <td>1380</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Devendra62</td>
                                                    <td>1364</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Vinit1995</td>
                                                    <td>1358</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kailasgavhar</td>
                                                    <td>1337</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sanjubaba01</td>
                                                    <td>1327</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Imliakum</td>
                                                    <td>1276</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Bhalavi123</td>
                                                    <td>1243</td>
                                                    </tr>
                                                    <tr>
                                                    <td>luna123</td>
                                                    <td>1238</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ridzi1213</td>
                                                    <td>1227</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gaud79</td>
                                                    <td>1206</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Shishupal123</td>
                                                    <td>1199</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mradul28399</td>
                                                    <td>1193</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ajajajaj</td>
                                                    <td>1154</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahi0712</td>
                                                    <td>1096</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kuldeep1326</td>
                                                    <td>1082</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rhino96</td>
                                                    <td>1044</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kalaichelvan</td>
                                                    <td>1032</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sidak16</td>
                                                    <td>993</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhaghaji</td>
                                                    <td>988</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Amit12372</td>
                                                    <td>964</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Manojdon1</td>
                                                    <td>958</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anupsamaddar</td>
                                                    <td>956</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sachinc321</td>
                                                    <td>928</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jignesh5448</td>
                                                    <td>910</td>
                                                    </tr>
                                                    <tr>
                                                    <td>AARUSH02</td>
                                                    <td>898</td>
                                                    </tr>
                                                    <tr>
                                                    <td>comred81</td>
                                                    <td>845</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Arnon2010</td>
                                                    <td>842</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sanjuv</td>
                                                    <td>790</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Naresh2015</td>
                                                    <td>760</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chirag1980</td>
                                                    <td>718</td>
                                                    </tr>
                                                    <tr>
                                                    <td>WOHOO</td>
                                                    <td>716</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sharmadeepak354</td>
                                                    <td>674</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ravimzchaj8</td>
                                                    <td>658</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arustar1</td>
                                                    <td>649</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rummybaaz</td>
                                                    <td>646</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ramniwas1998</td>
                                                    <td>645</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Lenin143</td>
                                                    <td>628</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shobhit911</td>
                                                    <td>621</td>
                                                    </tr>
                                                    <tr>
                                                    <td>murali24340</td>
                                                    <td>614</td>
                                                    </tr>
                                                    <tr>
                                                    <td>flicker</td>
                                                    <td>579</td>
                                                    </tr>
                                                    <tr>
                                                    <td>solankiraghu</td>
                                                    <td>554</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sdchettri</td>
                                                    <td>553</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Samsuibu</td>
                                                    <td>549</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rk1979</td>
                                                    <td>546</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Bsd1983</td>
                                                    <td>540</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gpatre</td>
                                                    <td>540</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rameshraj102</td>
                                                    <td>526</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tanuhazra</td>
                                                    <td>524</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nayak</td>
                                                    <td>524</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jain0707</td>
                                                    <td>499</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sudhihatrick</td>
                                                    <td>474</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lipika234</td>
                                                    <td>471</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sreejithkv</td>
                                                    <td>461</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mani00700</td>
                                                    <td>439</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rameshpanwar</td>
                                                    <td>428</td>
                                                    </tr>
                                                    <tr>
                                                    <td>MV2020</td>
                                                    <td>417</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kuttusinu</td>
                                                    <td>405</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shantidevi</td>
                                                    <td>371</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Basavaraja</td>
                                                    <td>353</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Raju1207</td>
                                                    <td>325</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pronil</td>
                                                    <td>306</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Anilhelode</td>
                                                    <td>294</td>
                                                    </tr>
                                                    <tr>
                                                    <td>British456</td>
                                                    <td>286</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Raffesia</td>
                                                    <td>278</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rumangogoi</td>
                                                    <td>264</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Aceofspace</td>
                                                    <td>238</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hingu</td>
                                                    <td>231</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sandeepsrivasta</td>
                                                    <td>193</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amanzzz</td>
                                                    <td>192</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rambishno</td>
                                                    <td>175</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kishore1987</td>
                                                    <td>145</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kansingh1985</td>
                                                    <td>118</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>

                            <div class="tab-pane fade" id="pills-date10-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">No. of Game Plays</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>deep1167</td>
                                                    <td>1179</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amanzzz</td>
                                                    <td>384</td>
                                                    </tr>
                                                    <tr>
                                                    <td>MV2020</td>
                                                    <td>348</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Vinit1995</td>
                                                    <td>329</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Bsd1983</td>
                                                    <td>309</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhaja</td>
                                                    <td>280</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bharatdon1</td>
                                                    <td>231</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sk7806</td>
                                                    <td>194</td>
                                                    </tr>
                                                    <tr>
                                                    <td>WOHOO</td>
                                                    <td>191</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Anilhelode</td>
                                                    <td>188</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kishore1987</td>
                                                    <td>165</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rameshpanwar</td>
                                                    <td>151</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rummybaaz</td>
                                                    <td>119</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>

                            <div class="tab-pane fade " id="pills-date9-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">No. of Game Plays</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>letthatmelts</td>
                                                    <td>6484</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pritam3566</td>
                                                    <td>6474</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Zzzack89</td>
                                                    <td>5771</td>
                                                    </tr>
                                                    <tr>
                                                    <td>joker141</td>
                                                    <td>4397</td>
                                                    </tr>
                                                    <tr>
                                                    <td>skmoond</td>
                                                    <td>4264</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sjgupta1981</td>
                                                    <td>3886</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajju7867</td>
                                                    <td>3848</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rohit0008124</td>
                                                    <td>3598</td>
                                                    </tr>
                                                    <tr>
                                                    <td>xyzfc</td>
                                                    <td>3331</td>
                                                    </tr>
                                                    <tr>
                                                    <td>badshahumai</td>
                                                    <td>3034</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kathy123</td>
                                                    <td>2709</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manuprasadvr</td>
                                                    <td>2526</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pattiking</td>
                                                    <td>2272</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jethavaboy</td>
                                                    <td>2240</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rhino96</td>
                                                    <td>2168</td>
                                                    </tr>
                                                    <tr>
                                                    <td>SKGAUTAM</td>
                                                    <td>2145</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kkmodi</td>
                                                    <td>2082</td>
                                                    </tr>
                                                    <tr>
                                                    <td>omjain</td>
                                                    <td>1946</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jogamer</td>
                                                    <td>1933</td>
                                                    </tr>
                                                    <tr>
                                                    <td>procardbaaz</td>
                                                    <td>1930</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Devendra62</td>
                                                    <td>1728</td>
                                                    </tr>
                                                    <tr>
                                                    <td>balukgm</td>
                                                    <td>1598</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahendra1987</td>
                                                    <td>1582</td>
                                                    </tr>
                                                    <tr>
                                                    <td>djdhdhfh</td>
                                                    <td>1530</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Suganyaselva</td>
                                                    <td>1522</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Bhalavi123</td>
                                                    <td>1437</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jokerjntzjr</td>
                                                    <td>1329</td>
                                                    </tr>
                                                    <tr>
                                                    <td>AARUSH02</td>
                                                    <td>1314</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Controlaa</td>
                                                    <td>1285</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Shishupal123</td>
                                                    <td>1277</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahi0712</td>
                                                    <td>1263</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hargovind123</td>
                                                    <td>1256</td>
                                                    </tr>
                                                    <tr>
                                                    <td>millhouse</td>
                                                    <td>1216</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ajajajaj</td>
                                                    <td>1198</td>
                                                    </tr>
                                                    <tr>
                                                    <td>luna123</td>
                                                    <td>1136</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sidak16</td>
                                                    <td>1093</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Amit12372</td>
                                                    <td>1063</td>
                                                    </tr>
                                                    <tr>
                                                    <td>viratbakshi02</td>
                                                    <td>1056</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Manojdon1</td>
                                                    <td>1038</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sachinc321</td>
                                                    <td>1016</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ramniwas1998</td>
                                                    <td>942</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anupsamaddar</td>
                                                    <td>940</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kalaichelvan</td>
                                                    <td>905</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mradul28399</td>
                                                    <td>882</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sharmadeepak354</td>
                                                    <td>881</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shobhit911</td>
                                                    <td>868</td>
                                                    </tr>
                                                    <tr>
                                                    <td>drbharat</td>
                                                    <td>836</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Naresh2015</td>
                                                    <td>828</td>
                                                    </tr>
                                                    <tr>
                                                    <td>adhuadhwin</td>
                                                    <td>812</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jignesh5448</td>
                                                    <td>795</td>
                                                    </tr>
                                                    <tr>
                                                    <td>comred81</td>
                                                    <td>793</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Hanumansingh</td>
                                                    <td>778</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rk1979</td>
                                                    <td>722</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sujeetkumar14</td>
                                                    <td>707</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chirag1980</td>
                                                    <td>699</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sdchettri</td>
                                                    <td>696</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lipika234</td>
                                                    <td>644</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tanuhazra</td>
                                                    <td>639</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rameshraj102</td>
                                                    <td>629</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Lenin143</td>
                                                    <td>614</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nayak</td>
                                                    <td>611</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sreejithkv</td>
                                                    <td>597</td>
                                                    </tr>
                                                    <tr>
                                                    <td>murali24340</td>
                                                    <td>596</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Samsuibu</td>
                                                    <td>590</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khalindrar12</td>
                                                    <td>557</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhupi090</td>
                                                    <td>553</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Mahanagu1323</td>
                                                    <td>548</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arustar1</td>
                                                    <td>507</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sudhihatrick</td>
                                                    <td>505</td>
                                                    </tr>
                                                    <tr>
                                                    <td>flicker</td>
                                                    <td>492</td>
                                                    </tr>
                                                    <tr>
                                                    <td>cvsred</td>
                                                    <td>484</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rumangogoi</td>
                                                    <td>475</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gpatre</td>
                                                    <td>446</td>
                                                    </tr>
                                                    <tr>
                                                    <td>98birbalsing</td>
                                                    <td>429</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jain0707</td>
                                                    <td>410</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Raffesia</td>
                                                    <td>377</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Swapbari</td>
                                                    <td>356</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Madvish</td>
                                                    <td>355</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kuttusinu</td>
                                                    <td>354</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mani00700</td>
                                                    <td>351</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Raju1207</td>
                                                    <td>337</td>
                                                    </tr>
                                                    <tr>
                                                    <td>British456</td>
                                                    <td>299</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Basavaraja</td>
                                                    <td>280</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shantidevi</td>
                                                    <td>276</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vijaykaushal</td>
                                                    <td>276</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hingu</td>
                                                    <td>273</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Shaurya1234</td>
                                                    <td>271</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Aceofspace</td>
                                                    <td>229</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rambishno</td>
                                                    <td>221</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sandeepsrivasta</td>
                                                    <td>208</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hitesh8042</td>
                                                    <td>182</td>
                                                    </tr>
                                                    <tr>
                                                    <td>coolhash999</td>
                                                    <td>175</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sajithka</td>
                                                    <td>175</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kansingh1985</td>
                                                    <td>109</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>

                            <div class="tab-pane fade" id="pills-date8-tab-ppc" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">No. Of Game Plays</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>letthatmelts</td>
                                                    <td>6441</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Zzzack89</td>
                                                    <td>5424</td>
                                                    </tr>
                                                    <tr>
                                                    <td>skmoond</td>
                                                    <td>4285</td>
                                                    </tr>
                                                    <tr>
                                                    <td>joker141</td>
                                                    <td>3878</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sjgupta1981</td>
                                                    <td>3694</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rohit0008124</td>
                                                    <td>3170</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kathy123</td>
                                                    <td>2914</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manuprasadvr</td>
                                                    <td>2527</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pattiking</td>
                                                    <td>2485</td>
                                                    </tr>
                                                    <tr>
                                                    <td>omjain</td>
                                                    <td>1857</td>
                                                    </tr>
                                                    <tr>
                                                    <td>moapongener</td>
                                                    <td>1845</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Devendra62</td>
                                                    <td>1677</td>
                                                    </tr>
                                                    <tr>
                                                    <td>djdhdhfh</td>
                                                    <td>1655</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahendra1987</td>
                                                    <td>1623</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Suganyaselva</td>
                                                    <td>1451</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sachinc321</td>
                                                    <td>1264</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sexylady</td>
                                                    <td>1250</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Shishupal123</td>
                                                    <td>1231</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ajajajaj</td>
                                                    <td>1146</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sidak16</td>
                                                    <td>1116</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Controlaa</td>
                                                    <td>1105</td>
                                                    </tr>
                                                    <tr>
                                                    <td>1992rohit</td>
                                                    <td>1099</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Amit12372</td>
                                                    <td>1040</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hargovind123</td>
                                                    <td>1038</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ramniwas1998</td>
                                                    <td>1022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Hanumansingh</td>
                                                    <td>974</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lipika234</td>
                                                    <td>971</td>
                                                    </tr>
                                                    <tr>
                                                    <td>imagine</td>
                                                    <td>901</td>
                                                    </tr>
                                                    <tr>
                                                    <td>drbharat</td>
                                                    <td>883</td>
                                                    </tr>
                                                    <tr>
                                                    <td>viratbakshi02</td>
                                                    <td>872</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anupsamaddar</td>
                                                    <td>849</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rk1979</td>
                                                    <td>812</td>
                                                    </tr>
                                                    <tr>
                                                    <td>comred81</td>
                                                    <td>805</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Naresh2015</td>
                                                    <td>789</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mradul28399</td>
                                                    <td>783</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sujeetkumar14</td>
                                                    <td>725</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chirag1980</td>
                                                    <td>720</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bilodenge</td>
                                                    <td>719</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhupi090</td>
                                                    <td>707</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tanuhazra</td>
                                                    <td>689</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gundaraj</td>
                                                    <td>668</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Pavanpjadhao</td>
                                                    <td>650</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sreejithkv</td>
                                                    <td>624</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sdchettri</td>
                                                    <td>609</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rameshraj102</td>
                                                    <td>595</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jignesh5448</td>
                                                    <td>594</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arustar1</td>
                                                    <td>590</td>
                                                    </tr>
                                                    <tr>
                                                    <td>murali24340</td>
                                                    <td>558</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Samsuibu</td>
                                                    <td>506</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rumangogoi</td>
                                                    <td>481</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sudhihatrick</td>
                                                    <td>411</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jsm123</td>
                                                    <td>397</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gpatre</td>
                                                    <td>397</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mani00700</td>
                                                    <td>388</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kuttusinu</td>
                                                    <td>369</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Swapbari</td>
                                                    <td>356</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Raju1207</td>
                                                    <td>353</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jain0707</td>
                                                    <td>310</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Lalaji120</td>
                                                    <td>295</td>
                                                    </tr>
                                                    <tr>
                                                    <td>British456</td>
                                                    <td>292</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rakesh90113</td>
                                                    <td>280</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vijaykaushal</td>
                                                    <td>253</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Basavaraja</td>
                                                    <td>240</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rambishno</td>
                                                    <td>235</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pintuc</td>
                                                    <td>219</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bedmaitry</td>
                                                    <td>208</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sandeepsrivasta</td>
                                                    <td>198</td>
                                                    </tr>
                                                    <tr>
                                                    <td>coolhash999</td>
                                                    <td>163</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-spc" role="tabpanel" aria-labelledby="pills-winnings-tab">
                        <ul class="nav nav-pills scrollable-tabs custom-main-tabs my-2" id="pills-tab" role="tablist">
                           <li class="nav-item " role="presentation">
                                <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date21-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">21st September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date20-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">20th September</button>
                            </li>
                          <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date19-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">19th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date18-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">16th-18 September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date15-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">15th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date14-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">14th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date13-tab" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">13th September</button>
                            </li>
                         {/* <!--  <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date12-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">12th September</button>
                            </li>
                             <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date11-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">9th-11th September</button>
                            </li>
                           <li class="nav-item " role="presentation">
                                <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date8-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">8th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date7-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">7th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date6-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">6th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date5-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">5th September</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-date-tab" type="button" role="tab" aria-controls="pills-medal"
                                    aria-selected="true">2nd-4th September</button>
                            </li> --> */}
                           
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                           <div class="tab-pane fade active show" id="pills-date21-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Vpk786</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>Gagan456</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>Vknshbsussg</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>r12456</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>killera1</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>abhinayraut</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>mesen</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>pawer14</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>swapnilmmmagare</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>gkfjvuugg</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>suneel7024</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>rajes9090</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>himda</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>ranu59</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>damarugam</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>feroz786</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>kismat12</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>deharjamatia</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>suraj11090</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>abhi1130</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>dahnu</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>anil7746</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>abhimewara</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>pawan128467372</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>sonunigam456</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>valvivishal</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>dcdon</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>as7023</td>
                        <td>9/21/2022</td>
                        </tr>
                        <tr>
                        <td>ravatvijaykumar</td>
                        <td>9/21/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date20-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Mirzamadinaa</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>rajkumarmsmd</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>soren2222</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Ashfee</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Pramendra12</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Aliramjan</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Bhayyu</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>fhgstb</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>krishn1995</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>rolexsirrolexsi</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>daya477</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>vikas69</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>uygyyhyhhyy</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>rajputi</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>deepubishoyi</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Chxut5755</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>suraj3233</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>ashokdas12</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>selvarajsuncity</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>juleshkumar</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>bharatsingh8084</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>meena315</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>ray790</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>solankichetan</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>ajith83650</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>santoshrai</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>akashmahto99</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Skrajyt</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>tiger09</td>
                        <td>9/20/2022</td>
                        </tr>
                        <tr>
                        <td>Dharmendr133</td>
                        <td>9/20/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date19-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Ritesh0929</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>huahmed</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>Jingynv</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>dreyytsgue</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>gkrushna1995</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>sandeepkhatak83</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>jayeshghatal</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>soner</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>ramlalmeena145</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>gohu4648</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>umesh1000</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>shyamsardar</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>iengam</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>dj1304</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>golugavit</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>sunil8013</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>sunil09928</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>rockysince99</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>chavandinesh</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>Patelkishan7224</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>rafik957</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>ravi9560</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>kingmaker212</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>made85</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>jamesbond00719</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>tenang</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>bluffer28</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>shubha1998</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>rahulrssuradkar</td>
                        <td>9/19/2022</td>
                        </tr>
                        <tr>
                        <td>hn777</td>
                        <td>9/19/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                            <div class="tab-pane fade" id="pills-date18-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Gorakh1993</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>9373493157</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>Munukar656</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>h123mollah</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>nnmali1989</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>krishnad55875</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>ultinstinct</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>mithaleshkumar9</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>choudhar</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>avenger220</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>srijha</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>punjy</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>gauravawasthi00</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>raj12344</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>bhim16</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>aaruamot</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>anil55aa</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>samir313</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>swapnm143</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>minyaka123</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>shivamjsl</td>
                        <td>9/16/2022</td>
                        </tr>
                        <tr>
                        <td>Swapan11</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>shankersk</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>rupanxxxxxxx</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>Hareesh1</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>bhartibiswas</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>pramod7777</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>sanjk</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>edith0017</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>moneymatter</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>ha2188</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>kingverma</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>vishameena</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>bho121</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>motior</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>pwin1</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>lucky7712</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>sa5255</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>ajayansh</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>mafizshsh</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>nrd790</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>sahaniu</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>ashrafuzzaman</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>surji</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>callmesam</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>rahul0013</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>1sachin</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>bino11111</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>dj3251</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>sandeepyadav368</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>altafqureshi748</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>mohd12345jaid</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>mddilsh</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>ajayvarman95</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>aamool</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>hd3378</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>vintagesehwag</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>Kiyakiyare</td>
                        <td>9/17/2022</td>
                        </tr>
                        <tr>
                        <td>shammi23</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>rjdunia</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>piku2002</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>drankitsingh27</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>paripranjal</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>ajayshende</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>shahrukhssdggjk</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>asrey</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>madrana</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>rahulkumarl</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>nkthapa1111</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>faizkhan27</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>vivekkumarvi</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>asyyin</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>rakeshbarman</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>rajib01234</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>bhopendrapatel</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>thepoc</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>sekhar59</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>rahuljan24</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>jaggu1432</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>sonu133ssssssss</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>vsheikh</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>takiyagenji</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>siraj078600</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>arunpanwar013</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>adityaverma1597</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>blowmind</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>runan</td>
                        <td>9/18/2022</td>
                        </tr>
                        <tr>
                        <td>hitubhai</td>
                        <td>9/18/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                            <div class="tab-pane fade" id="pills-date15-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>prathikpra</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>raj5609</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>biku97</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>cactus11</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>mandeepgajraj</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>kingrowdy</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>420nikhil</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>kaluramkk</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>sonubajaj</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>heart9999999988</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>ravindracharan</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>sghjiiijjn</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>rummymeitei</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>fucha</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>sawangahlawat</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>kumarjeetu5500</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>muthudhanabal25</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>singhsuraj919</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>ravichk</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>asabovesohigh</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>pari977</td>
                        <td>9/15/2022</td>
                        </tr>
                        <tr>
                        <td>bruno23</td>
                        <td>9/15/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date14-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>aanandrathod</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>dhanauti</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>kumbang</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>solankichandu</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>biswajitmaity</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>yangchu</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>rangesh16</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>bakshiayan</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>kaluramkk</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>avisampa</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>ghanshyam323</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>anandakhande</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>rammunde</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>makwanaalpeshbh</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>maniguri</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>kunaljain1997</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>kuldeep2006</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>sumonmollah</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>jayapityamama</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>jazzrashmi</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>devrajnahak9</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>hemuu</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>sachu9945</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>pol123</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>buddha50</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>winner1769</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>zohan11</td>
                        <td>9/14/2022</td>
                        </tr>
                        <tr>
                        <td>winnerforever</td>
                        <td>9/14/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date13-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

    <div class="boxbg">
        <div class="box1">
            <table class="table1">
                <thead>
                    <tr class="headbg">
                        <td class="heading">username</td>
                        <td class="heading">kyc completion date</td>
                        
                    </tr>
                </thead>
            </table>
        </div>
       
        <div class="box">
    
            <table class="table1">
                <tbody>
                    <tr>
                        <td>Kiranthakor</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>Shah123sonu</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>9.32E+09</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>Kallyi123</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>pundir</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>Hrutikpatil</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>stillharsh</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>anku7284</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>chhotu98</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>deevyansh00</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>bwnsdjsnsnjw</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>devendrabirla</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>Mohan24</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>gk8252</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>sahilkhan0000</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>mksahu786</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>dee124p</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>12meena123</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>rasatha</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>apdhakad</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>dilb1276</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>sanjib2</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>totansikdar</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>hiraknath23</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>profitjs</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>king2002</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>jitendrsahu</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>CashCrazy</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>janmajay</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>thoufig</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>khirajram</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>musa23</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>muskan34</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>shi8649</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>vishalvyas04</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>deb12</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>ruxfuxfi</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>maddy1</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>sanju9799</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>asfaqahmad</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>toxicboy</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>pmshelke123</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>Ndjddj</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>kalpeshkishor</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>balram1407</td>
                        <td>9/13/2022</td>
                        </tr>
                        <tr>
                        <td>jeet4064</td>
                        <td>9/13/2022</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
                          
                           <div class="tab-pane fade" id="pills-date12-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>Gudduk</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sheebashivam</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Jaydev522</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahatoam</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ganeshlobhi14</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>loser665</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hanumanji8</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>avinash7666</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ganaahkumar</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shrikrashan9900</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jayteju</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dm828290</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shivam19</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kisan0910</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rajnes</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manas80</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tiwarip713</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>deepak787318</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manujsharma</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kankpk</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rajib2715</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kaligopi001</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>starboy1</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chinese123</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>brijrajmeena</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>raj72309</td>
                                                    <td>9/12/2022</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                          
                          
                            <div class="tab-pane fade" id="pills-date11-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>Avdheshjatav</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Pavanjat</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Nkprince</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>krish2015</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sanjaykhnti</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>yogi348123</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sharavankumar</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nikhilsahni</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>naiemkhan</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>matamsagduj</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>praveenroot</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rup12345</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gulal786756</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>caikepro</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rabindrsnathroy</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sandeepkumarji</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jrangmarak</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rahul32123</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amit0341</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>808080ok</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Biran</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>iqjgwie1</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>prlllll</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jaguliams</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jmukesh</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>madanbolla</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>payelshyam</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>alagu1991</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jassa230</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chotonsk</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>harsh4k</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amitte21</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pakya1</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pokerhulk</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vikassoren</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajaybarik1</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>avibaba1</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amit0143</td>
                                                    <td>9/9/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sandyasahu</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>suraj8057</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mikeslal</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shivanand2543</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>digvijayatel</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jaiihind</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khan0786m</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tintin7</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mahadevfvdd</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rodrickvii</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sorabh1234</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anch3523</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>3470v</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>1989suvo</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>instagram656</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aman8109</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>darsh1310</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bipadtaranmajhi</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khusik</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mukeshkr8888</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>uves123</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>prasunsinha</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lalon143</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khatubale</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mohanadeem</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jaymala</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>paymentcard</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>golumeenaji</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ravinak0805</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>surajatram308</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shiva633</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>andriask</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jyoti344</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aniljh</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ivam1122</td>
                                                    <td>9/10/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>satyam000s</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Hxjxjdj</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ashpsl</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>poket52</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nirmal00</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vishalpro</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>parminder3105</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rfdshg</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pinak09</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nakliheero</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amoljadhav1</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chethanc984</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>buggie999</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shashikantshind</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajityadav123</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>purnsingh</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>witts</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajeet36</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pin22</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rakeshmahra</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>syed007</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bittucloser</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hanu7728</td>
                                                    <td>9/11/2022</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            <div class="tab-pane fade " id="pills-date8-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">

                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>Ajiths</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>RummyStar1</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ravitamu</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>azamKhan</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Ningthou</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Cosmicshard</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aryan125</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Jedbmzmm</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mithun1995</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bikash444</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>suman11111</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sunikatara</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>adhithiyan183</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pradipjpawar</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khanna209</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rameshjigalabjd</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dilipkathivada</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sunnyvaz666</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>balu1222</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anuj1253</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pawan808580</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aviji247</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>captain07</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jaatdeepak</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>samir7078</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lalitradhe</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ankytech</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kaptan92</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rame1234</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kanchannn</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amking</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tejas2002</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>f7tz9tifzyxg0</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>indianthunder74</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gangadhar91</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>roh12</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>azharvvv786</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ramukluhar</td>
                                                    <td>9/8/2022</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                            <div class="tab-pane fade" id="pills-date7-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">
                              
                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                    
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>vivekmhatre</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Vikrambist</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Mallaiya132</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Bbs123</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manojjw</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajaykumarkjl865</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>45manojkoli</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>akash1345</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kumarravin233</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sameeralda</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sukhpalsingh000</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>meenakashxjj</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>crazy2</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>patkin</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>abhishek2007</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aman07mahi</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>anil12314</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajeet9056</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lekharajgadhwal</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pcsharda</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>raj481</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kavimani0618</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ravi4567890</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arshakhan123</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kohliji</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gbjk1122</td>
                                                    <td>9/7/2022</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-date6-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">
                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>Deepu1023</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Mahawar1708</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>thoke435</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sankar671632</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jethava1204</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pk54321</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hiteshsinhaji</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dilipdam19</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sharkshooter</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chinu9u99</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>krishnasidar</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arun57</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nandu8</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>macc9211</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>licktt123</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>fcsocre</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>debola</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>gopidas123</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ravi255584</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dharmendrayada1</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>leero</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ghasi12345</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>abhinaykumar570</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>hgfds</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>neeraj5607</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>haseebbanarsi</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ktm1122</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>adbtg</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shatrughna111</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jalwa85</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>maharawar</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shresudip</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                                    <tr>
                                                    <td>a1222</td>
                                                    <td>09/06/22</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-date-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">
                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>sursa2929</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>munnakunar</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>yash31</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>abby123</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shakyaa</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vivo56</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kanoji123</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>haanji</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pikijyothi</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kaushbauddh</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sanju1568</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>tavi76</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bigfanmsd</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>khiladibhaiya</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jvipin15</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>abhilash809080</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sehgu1601</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>manojgotek</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pan1999</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>toufik45</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jkd12</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shivmohali</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sudnyan</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>umakant007</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bholanath112233</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>talim2810</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Zapdi54948</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Tejaspatil</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Pravin066</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Kaukaney</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Baburam9977</td>
                                                    <td>9/4/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajit0007</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>phronixx</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>nikit12345</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ramjie12345</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ajaynadar</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>goreysantal</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>rushimunde</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sunny0492</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shivuxxxx</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mohsin1234</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dcp0786</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dd789</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>racepra</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>krishnajamatia</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>arvindmad</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sharkshooter</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>afjalkade</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dk1696</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vishalamin</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>akash731123</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>KunalShinde</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Heroboy</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Noufalmk</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Galandesandy</td>
                                                    <td>9/3/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>vineet5100</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jimmy123</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rajedon</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>shashipk</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>suraj5158</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>lalababu</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>98patelji</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Nironjoy</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>jb11123</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sbkabap</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bheesingh</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ahir143</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>inder99053</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>akashrj22</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bhupnarayan</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ronith</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>kisku1996</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>klarul</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bababa123</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>madhuking</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bfnph</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>sahildal</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>stevenolosophy</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>raviraj90</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>guruprasady123</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>meena56</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>iceboy8972</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>saurabham</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>dinesh123456dd</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ankurji</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Vibhor07</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Rotney</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ToXXiC</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Akakkii</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>veer7357</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Sanjajsj</td>
                                                    <td>9/2/2022</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-date5-tab" role="tabpanel" aria-labelledby="pills-winnings-tab">
                                <div class="boxbg">
                                    <div class="box1">
                                        <table class="table1">
                                            <thead>
                                                <tr class="headbg">
                                                    <td class="heading">username</td>
                                                    <td class="heading">kyc completion date</td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                   
                                    <div class="box">
                                
                                        <table class="table1">
                                            <tbody>
                                                <tr>
                                                    <td>Ashim199145</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>girijanaik</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>chiranjibrrr</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>pbandaji</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                   <tr>
                                                    <td>krishnapurkoti</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aniketshinde</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>triveninath</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>aakash637</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>raj393192</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>mithleshkumar67</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ashish0135</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>amanyadav18</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>monu1997</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>paapu</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>ss1988</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>caikepro</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>garuna</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr>
                                                    <td>bharat564</td>
                                                    <td>9/5/2022</td>
                                                    </tr>
                                                    <tr class="tr1">
                                                    <td>llllllllafgdg</td>
                                                    <td>9/5/2022</td>
                                                    </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

               {/* <!-- Milestone-Leaderboards tab --> */}
                <div class="tab-pane fade" id="pills-leaderboards" role="tabpanel" aria-labelledby="pills-winnings-tab">
                    <ul class="nav nav-pills  custom-main-tabs ul2 my-2" id="pills-tab" role="tablist">
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-info-sub-tab-lb" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">Info</button>
                        </li>
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link fw-bold xyz box2-btn font" id="pills-winnings-tab" data-bs-toggle="pill" data-bs-target="#pills-champions" type="button" role="tab" aria-controls="pills-winnings" aria-selected="true"> Champions</button>
                        </li>
                        <li class="nav-item li3" role="presentation">
                            <button class="nav-link fw-bold box2-btn font" id="pills-cashes-tab" data-bs-toggle="pill" data-bs-target="#pills-hustlers" type="button" role="tab" aria-controls="pills-cashes" aria-selected="false">Hustlers</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-info-sub-tab-lb" role="tabpanel" aria-labelledby="pills-winnings-tab">
                            <div>
                                <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Milestone-Leaderboards_3009.jpg" alt="" class="img-fluid w-100 h-auto bannerBorderRadius"/>
                            </div>
                            <div style={{textAlign: "center"}} class="my-5" onclick="openScreen('Home')">
                                <img src="https://static.cardbaazi.com/assets/images/diwali-billionaire-series/Start-Playing.png" alt=""/>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-champions" role="tabpanel" aria-labelledby="pills-winnings-tab">
                            <ul class="nav nav-pills scrollable-tabs  custom-main-tabs my-2" id="pills-tab" role="tablist">
                               <li class="nav-item " role="presentation">
                    <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date-29-ch" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">23rd-29th September</button>
                </li>
                               <li class="nav-item " role="presentation">
                    <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date-22-ch" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">16th-22nd September</button>
                </li>
                               <li class="nav-item " role="presentation">
                    <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date-15-ch" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">9th-15th September</button>
                </li>
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills-date-8-ch" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">2nd-8th September</button>
                                </li>
                               
                               
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                               <div class="tab-pane fade active show" id="pills-date-29-ch" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">Shirrish</p>
                                                        <h4>480</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">Suganyaselva</p>
                                                        <h4>517</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">DeepanDee</p>
                                                        <h4>442</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Wins</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                                
                                                    <tr>
                                                    <td>4</td>
                                                    <td>murali24340</td>
                                                    <td>427</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>Kuldeep1326</td>
                                                    <td>421</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>monti50215</td>
                                                    <td>412</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>pradipjpawar</td>
                                                    <td>398</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>deepaksingh7232</td>
                                                    <td>389</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>kathy123</td>
                                                    <td>387</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>Kumarmanoj29</td>
                                                    <td>365</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                              
                                <div class="tab-pane fade" id="pills-date-22-ch" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">monti50215</p>
                                                        <h4>506</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">kathy123</p>
                                                        <h4>561</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">jatdevta0551</p>
                                                        <h4>505</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Wins</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                               
                                                    <tr>
                                                    <td>4</td>
                                                    <td>adhuadhwin</td>
                                                    <td>456</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>Kuldeep1326</td>
                                                    <td>416</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>AARUSH02</td>
                                                    <td>381</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>Devendra62</td>
                                                    <td>371</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>Pkb1993</td>
                                                    <td>361</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>deepaksingh7232</td>
                                                    <td>356</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>Shirrish</td>
                                                    <td>345</td>
                                                    </tr>    
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                              
                                 <div class="tab-pane fade" id="pills-date-15-ch" role="tabpanel">
                    <div class="schedule-section pt-0">
                        <section class="LeaderboardCardbaazi bg-light">
                                <div class="container">
                                  <div class="row p-3 pb-sm-5 pb-3">
                                    <div class="col-3 col-md-3 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                        <p class="cbdusername">kathy123</p>
                                        <h4>396</h4>
                                        <p>No. of Wins</p>
                                    </div>
                                    <div class="col-6 col-md-6 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                        <p class="cbdusername">shresudip</p>
                                        <h4>426</h4>
                                        <p>No. of Wins</p>
                                    </div>
                                    <div class="col-3 col-md-3 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                        <p class="cbdusername">Imliakum</p>
                                        <h4>384</h4>
                                        <p>No. of Wins</p>
                                    </div>
                                  </div>
                                </div>
                              </section><table class="raf__table table">
                             
                                 <thead class="thead">
                                    <tr>
                                        <td class="custd">Rank</td>
                                        <td class="custd">Player</td>
                                        <td class="custd">No. of Wins</td>
                                       </tr>
                                 </thead>
                            <tbody>
                               
                                    <tr>
                                    <td>4</td>
                                    <td>Sunil032</td>
                                    <td>359</td>
                                    </tr>
                                    <tr>
                                    <td>5</td>
                                    <td>9562872631</td>
                                    <td>337</td>
                                    </tr>
                                    <tr>
                                    <td>6</td>
                                    <td>1indian</td>
                                    <td>322</td>
                                    </tr>
                                    <tr>
                                    <td>7</td>
                                    <td>mahendra1987</td>
                                    <td>321</td>
                                    </tr>
                                    <tr>
                                    <td>8</td>
                                    <td>Kumarmanoj29</td>
                                    <td>318</td>
                                    </tr>
                                    <tr>
                                    <td>9</td>
                                    <td>balukgm</td>
                                    <td>318</td>
                                    </tr>
                                    <tr>
                                    <td>10</td>
                                    <td>Shaikh9860</td>
                                    <td>315</td>
                                    </tr>      
                            </tbody>
                        </table>
                    </div>
                </div>
                              
                                <div class="tab-pane fade" id="pills-date-8-ch" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">jatdevta0551</p>
                                                        <h4>568</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">kathy123</p>
                                                        <h4>693</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">SKGAUTAM</p>
                                                        <h4>537</h4>
                                                        <p>No. of Wins</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Wins</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                                    <tr>
                                                    <td>4</td>
                                                    <td>Suganyaselva</td>
                                                    <td>411</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>AARUSH02</td>
                                                    <td>390</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>Sunil032</td>
                                                    <td>383</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>kkmodi</td>
                                                    <td>369</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>Devendra62</td>
                                                    <td>368</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>mahendra1987</td>
                                                    <td>329</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>balukgm</td>
                                                    <td>315</td>
                                                    </tr>          
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-hustlers" role="tabpanel" aria-labelledby="pills-winnings-tab">
                            <ul class="nav nav-pills scrollable-tabs custom-main-tabs my-2" id="pills-tab" role="tablist">
                                <li class="nav-item " role="presentation">
                    <button class="nav-link active fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills--date-29-h" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">23rd-29th September</button>
                </li>
                               <li class="nav-item " role="presentation">
                    <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills--date-22-h" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">16th-22nd September</button>
                </li>
                               <li class="nav-item " role="presentation">
                    <button class="nav-link fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills--date-15-h" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">9th-15th September</button>
                </li>
                                <li class="nav-item " role="presentation">
                                    <button class="nav-link  fw-bold box2-btn font" id="pills-medal-tab" data-bs-toggle="pill" data-bs-target="#pills--date-8-h" type="button" role="tab" aria-controls="pills-medal" aria-selected="true">2nd-8th September</button>
                                </li>
                               
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                               <div class="tab-pane fade active show" id="pills--date-29-h" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">Pkb1993</p>
                                                        <h4>1308</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">shresudip</p>
                                                        <h4>1784</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">adhuadhwin</p>
                                                        <h4>1305</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Losses</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                
                                                    <tr>
                                                    <td>4</td>
                                                    <td>haren8811</td>
                                                    <td>1257</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>Imliakum</td>
                                                    <td>1177</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>Devendra62</td>
                                                    <td>1158</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>Umang12</td>
                                                    <td>1107</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>solankichetan</td>
                                                    <td>1099</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>mahendra1987</td>
                                                    <td>1049</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>AARUSH02</td>
                                                    <td>886</td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                              
                               <div class="tab-pane fade" id="pills--date-22-h" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">bhawani143</p>
                                                        <h4>1153</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">Imliakum</p>
                                                        <h4>1320</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">gogoi12</p>
                                                        <h4>1107</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Losses</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                                    <tr>
                                                    <td>4</td>
                                                    <td>SURESHA</td>
                                                    <td>1068</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>DeepanDee</td>
                                                    <td>1053</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>kavitha1985</td>
                                                    <td>1033</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>Sushmagrg</td>
                                                    <td>1030</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>shresudip</td>
                                                    <td>1028</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>sachinc321</td>
                                                    <td>1020</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>deepumg</td>
                                                    <td>1009</td>
                                                    </tr> 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                              
                               <div class="tab-pane fade" id="pills--date-15-h" role="tabpanel">
                    <div class="schedule-section pt-0">
                        <section class="LeaderboardCardbaazi bg-light">
                                <div class="container">
                                  <div class="row p-3 pb-sm-5 pb-3">
                                    <div class="col-3 col-md-3 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                        <p class="cbdusername">Sunil032</p>
                                        <h4>1306</h4>
                                        <p>No. of Losses</p>
                                    </div>
                                    <div class="col-6 col-md-6 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                        <p class="cbdusername">adhuadhwin</p>
                                        <h4>1394</h4>
                                        <p>No. of Losses</p>
                                    </div>
                                    <div class="col-3 col-md-3 text-center">
                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                        <p class="cbdusername">kailasgavhar</p>
                                        <h4>1254</h4>
                                        <p>No. of Losses</p>
                                    </div>
                                  </div>
                                </div>
                              </section><table class="raf__table table">
                             
                                 <thead class="thead">
                                    <tr>
                                        <td class="custd">Rank</td>
                                        <td class="custd">Player</td>
                                        <td class="custd">No. of Losses</td>
                                       </tr>
                                 </thead>
                            <tbody>
                            
                                <tr>
                                <td>4</td>
                                <td>afjalkade</td>
                                <td>1235</td>
                                </tr>
                                <tr>
                                <td>5</td>
                                <td>mahendra1987</td>
                                <td>1192</td>
                                </tr>
                                <tr>
                                <td>6</td>
                                <td>Umang12</td>
                                <td>1086</td>
                                </tr>
                                <tr>
                                <td>7</td>
                                <td>Vinit1995</td>
                                <td>1056</td>
                                </tr>
                                <tr>
                                <td>8</td>
                                <td>Shishupal123</td>
                                <td>1045</td>
                                </tr>
                                <tr>
                                <td>9</td>
                                <td>Pkb1993</td>
                                <td>968</td>
                                </tr>
                                <tr>
                                <td>10</td>
                                <td>kkmodi</td>
                                <td>930</td>
                                </tr>    
                            </tbody>
                        </table>
                    </div>
                </div>
                              
                                <div class="tab-pane fade" id="pills--date-8-h" role="tabpanel">
                                    <div class="schedule-section pt-0">
                                        <section class="LeaderboardCardbaazi bg-light">
                                                <div class="container">
                                                  <div class="row p-3 pb-sm-5 pb-3">
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-2.png" alt="Play Card Games Online" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">Shishupal123</p>
                                                        <h4>1021</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-6 col-md-6 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-1v29-07.png" alt="Play Site - CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">sachinc321</p>
                                                        <h4>1023</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                    <div class="col-3 col-md-3 text-center">
                                                      <img src="https://static.cardbaazi.com/assets/images/icf/Rank-3.png" alt="Play at CardBaazi" class="w-100 img-fluid"/>
                                                        <p class="cbdusername">subin3415</p>
                                                        <h4>980</h4>
                                                        <p>No. of Losses</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section><table class="raf__table table">
                                             
                                                 <thead class="thead">
                                                    <tr>
                                                        <td class="custd">Rank</td>
                                                        <td class="custd">Player</td>
                                                        <td class="custd">No. of Losses</td>
                                                       </tr>
                                                 </thead>
                                            <tbody>
                                              
                                                    <tr>
                                                    <td>4</td>
                                                    <td>Sidak16</td>
                                                    <td>911</td>
                                                    </tr>
                                                    <tr>
                                                    <td>5</td>
                                                    <td>Ajajajaj</td>
                                                    <td>904</td>
                                                    </tr>
                                                    <tr>
                                                    <td>6</td>
                                                    <td>Amit12372</td>
                                                    <td>835</td>
                                                    </tr>
                                                    <tr>
                                                    <td>7</td>
                                                    <td>Manojdon1</td>
                                                    <td>810</td>
                                                    </tr>
                                                    <tr>
                                                    <td>8</td>
                                                    <td>sexylady</td>
                                                    <td>797</td>
                                                    </tr>
                                                    <tr>
                                                    <td>9</td>
                                                    <td>Ramniwas1998</td>
                                                    <td>791</td>
                                                    </tr>
                                                    <tr>
                                                    <td>10</td>
                                                    <td>Hanumansingh</td>
                                                    <td>776</td>
                                                    </tr>        
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!--  --> */}
                </div>
                 {/* <!-- Milestone-Leaderboards tab ends here --> */}
            </div>
        </div>
    </>
  )
}
