import React from 'react';
import {Link} from 'react-router-dom';

export default function RummyHi() {
  return (
   <>
   <div className='dbs-icon'>
            <Link to="/path">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/long-arrow-left.png" alt=''/>

            </Link>

        </div>


    <div className="container">
    <div className="row">
      <div className="col-12 p-0">
	
  
        <section className="bg-light py-3" id="howToplay">
          <div className="container">
            <div className="row py-3 py-sm-5">
              <div className="col-md-12 text-center text-sm-start align-self-center">
                <h2 className="text-md-center fw-bold">कैसे  <span className="text-blue ">खेलते हैं रम्मी गेम?</span></h2>
                <p className="text-muted">आइए हम आपको RummyBaazi रम्मी टेबल पर सोच-समझकर फैसले लेने में मदद करें। ऑनलाइन रम्मी गेम खेलने के लिएआपको इस गेम के बेसिक रुल सीखने होते हैं जिसके बाद आप गेम की शुरुआत कर सकते हैं |</p>
   
              </div>
             
            </div>
          </div>
        </section>
        <h4 className="text-center pt-4 mb-3">Hand Rankings</h4>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">प्योर( sequence ) और इंप्योर(sequence )</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/sequences.png" />
                </div>
                <div className="d-flex">
                  <p className="text-muted-custom text-center px-2">
                    एक ही सूट में तीन या तीन से ज्यादा कार्ड और रैंक को बढ़ते क्रम या घटते क्रम में लगाने को प्योर सीक्वेंस कहते हैं |
                  </p>
                  <p className="text-muted-custom text-center px-2">
                    एक या अधिक जोकरों के साथ सीक्वेंस बनाने को इमप्योर सीक्वेंस कहते हैं |
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">वैलिड सेट और इनवैलिड सेट</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/valid-invalid-set.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    एक ही रैंक लेकिन अलग अलग सूट के तीन या उससे अधिक कार्ड के ग्रुप को सेट कहते हैं |
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">प्रिंटेड जोकर और वाइल्ड जोकर</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto" src="https://static.cardbaazi.com/msite/assets/images/rummy/joker.png" />
                </div>
                <div className="d-flex">
                  <p className="text-muted-custom text-center px-2">
                    गेम की शुरुआत में बंद डेक से रैंडम्ली उठाया गया एक कार्ड जिसका इस्तेमाल सेट या सीक्वेंस बनाने के लिए किया जा सकता है उसे वाइल्ड जोकर कहते हैं |
                  </p>
                  <p className="text-muted-custom text-center px-2">
                    कार्ड जिसमें एक जोकर की छवि होती है जिसका उपयोग सेट या सीक्वेंस बनाने के लिए किया जा सकता है उसे प्रिंटेड जोकर कहते हैं |
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">फर्स्ट ड्रॉप और मिडल ड्रॉप</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/drop-and-go.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    <strong>फर्स्ट ड्रॉप (First drop)</strong>
                    जब कोई खिलाड़ी गेम में कोई एक कार्ड चुनने से पहले खेल को छोड़ने का फैसला करता है उसे फर्स्ट ड्राप कहते हैं | वह 20 अंक हार जाता है।
                    <br />
                    <strong>मिडिल ड्रॉप (Middle drop)</strong>
                    जब कोई खिलाड़ी गेम के दौरान या फिर कार्ड चुनने के बाद खेल को छोड़ने का फैसला करता है उसे मिडिल ड्राप कहते हैं |वह 40 अंक हार जाता है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">पत्तों की वैल्यू</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/value-cards.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    ऐस, किंग, क्वीन, जैक आपको 10 पॉइंट्स लूज़ करवाते हैं | 2,3,4,5,6,7,8,9,10 अपनी रैंक जितने पॉइंट्स आपको लूज़ कराते हैं |  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">डील रम्मी</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/deals-rummy.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    डील रम्मी एक हद्द तक पॉइंट्स रम्मी के जैसा ही होता है पर इसमें खेले जा रहे डील्ज़ पहले से निर्धारित होते हैं। सभी खिलाड़ियों को शुरुआत में ही एक बराबर चिप्स दिए जाते हैं। खेल के अंत में जिस खिलाड़ी के पास सबसे अधिक चिप्स होते हैं उसे विजेता घोषित किया जाता है।  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row m-1">
            <div className="rounded border border-primary">
              <h4 className="text-center text-blue pt-2">पूल रम्मी</h4>
              <div className="">
                <div className="d-flex">
                  <img alt="" className="w-100 m-auto"
                    src="https://static.cardbaazi.com/msite/assets/images/rummy/pool-rummy.png" />
                </div>
                <div className="">
                  <p className="text-muted-custom text-center px-2">
                    पूल रम्मी में खेल शुरू करने के वक्त सभी खिलाड़ी अपने पैसे एक साथ इखट्टा करते हैं। ये खेल दो तरीक़ों से खेल जाता है - 101 और 201 पूल रम्मी। ये पॉइंट्स रम्मी के जैसा ही होता है जिसमें सिर्फ़ एक विजेता होता है और बाक़ी खिलाड़ी निर्धारित पूल पॉइंट्स पर पहुचने पर हार जाते हैं।  
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
