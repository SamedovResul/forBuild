import React,{
  useState,
  useEffect
} from 'react'
import './learner.css'
import AvataraModal from './avatarModal'
import TopicModal from './topicModel'

const LearnerForm = () => {
  const [Error, setError] = useState({
    name:false,
    age:false
  })
  const [Avataropen, setAvataropen] = useState(false);
  const AvatarhandleOpenClose = () => Avataropen? setAvataropen(false) : setAvataropen(true);
  const [kisdData, setkidsData] = useState({
    name:'',
    age:'',
    avatar:'',
    topic:[],
    id:''
  });
  const [kidsArray, setkidsArray] = useState([]);
  const [topics, setTopicsSelected] = useState([
    {
      name:'Puzzle1',
      selected:false,
      id:"1"
    },
    {
      name:'Puzzle2',
      selected:false,
      id:"2"
    },
    {
      name:'Puzzle3',
      selected:false,
      id:"3"
    },
    {
      name:'Puzzle4',
      selected:false,
      id:"4"
    },
    {
      name:'Puzzle5',
      selected:false,
      id:"5"
    },
    {
      name:'Puzzle6',
      selected:false,
      id:"6"
    },
    {
      name:'Puzzle7',
      selected:false,
      id:"7"
    },
    {
      name:'Puzzle8',
      selected:false,
      id:"8"
    },
    {
      name:'Puzzle9',
      selected:false,
      id:"9"
    },
  ]);
  const Avatars = [
    {
      img:"https://static.outschool.com/master/main/public/images/star.8a380f6c7e4f5c48f6052a2d118159a7.png"
    },
    {
      img:'https://static.outschool.com/master/main/public/images/alien.1966536aad905a5434fdea46d5be6312.png'
    },
    {
      img:"https://static.outschool.com/master/main/public/images/apple.2fff0eb425505cc295e603b4d6f22c72.png"
    },
    {
      img:"https://static.outschool.com/master/main/public/images/banana.a756119b56cbecd0c97b4e376c55e490.png"
    },
    {
      img:"https://static.outschool.com/master/main/public/images/baseball.1d942a007111b3fdcbfee264d3378645.png"
    },
    {
      img:"	https://static.outschool.com/master/main/public/images/face7.b248d9424dfe84674a4395310589843e.png"
    },
    {
      img:"https://static.outschool.com/master/main/public/images/beaker.c6fbd20d7881a7642180dd2421304c75.png"
    },
    {
      img:"https://static.outschool.com/master/main/public/images/baseball.1d942a007111b3fdcbfee264d3378645.png"
    },
    {
      img:"	https://static.outschool.com/master/main/public/images/face7.b248d9424dfe84674a4395310589843e.png"
    },
    {
      img:"https://static.outschool.com/master/main/public/images/beaker.c6fbd20d7881a7642180dd2421304c75.png"
    },
  ]
  const [Img, setImg] = useState(Avatars[0].img)

  // kids topics
  const [Topicopen, setTopicopen] = useState(false);
  const TopichandleOpenClose = () => Topicopen? setTopicopen(false) : setTopicopen(true);
  const handleClick = (index) => {
    const newSelected = [...topics];
    newSelected[index].selected = !topics[index].selected;
    setTopicsSelected(newSelected);
    setkidsData({
      ...kisdData,
      topic:[...topics.filter(data => data.selected === true  )]
    });
  }

  // push to kidsArray
  const handelKidsArray = ()=>{
    setkidsArray([...kidsArray, kisdData])
    setkidsData({
      name:'',
      age:'',
      avatar:'',
      topic:[],
      edit:false
    }) 
    setTopicsSelected(prevTopics => prevTopics.map(topic => ({ ...topic, selected: false })));
  }
  // add to edit
  const addtoEdit = (data) => {
    const {name,age,avatar,topic} = data
    setkidsData({
      name:name,
      age:age,
      avatar:avatar,
      topic:topic,
      edit:true
    })
    const updatedTopics = topics.map((t) => {
      const newTopic = topic.find((data) => data.name === t.name);
      if (newTopic) {
        return { ...t, selected: newTopic.selected };
      }
      return t;
    });
    setTopicsSelected(updatedTopics);
  }

  // save learner
  const saveLearner = (data) =>{
    if(kisdData.edit){
      setkidsArray(prevKidsArray => prevKidsArray.map(data => {
        if (data.name === kisdData.name) {
          return kisdData;
        } else {
          return data;
        }
      }));
      setkidsData({
        name:'',
        age:'',
        avatar:'',
        topic:[]
      }) 
      setTopicsSelected(prevTopics => prevTopics.map(topic => ({ ...topic, selected: false })));
    } else if(kisdData.name && kisdData.age ){
      setkidsArray([...kidsArray, kisdData])
      setkidsData({
        name:'',
        age:'',
        avatar:'',
        topic:[]
      })
      setTopicsSelected(prevTopics => prevTopics.map(topic => ({ ...topic, selected: false })));
    } else if(!kisdData.name || !kisdData.age){
        !kisdData.name && handleError({
          name:true
        })
        !kisdData.age && handleError({
          age:true
        })
    }
  }

  // delete array
  const handleDeleteKid = (nameToDelete) => {
    setkidsArray(kidsArray.filter((kid) => kid.name !== nameToDelete));
    setkidsData({
      name:'',
      age:'',
      avatar:'',
      topic:[]
    })
    setTopicsSelected(prevTopics => prevTopics.map(topic => ({ ...topic, selected: false })));
  };
  

  // handle error
  const handleError = (error) =>{
    setError(error)
  }

  return (
    <section className='learner-section' >
      <AvataraModal 
        setImg={setImg} 
        Avataropen={Avataropen}  
        AvatarhandleOpenClose={AvatarhandleOpenClose} 
        Avatars={Avatars} 
        setkidsData={setkidsData}
        kisdData={kisdData}
      />
      <TopicModal 
        TopichandleOpenClose={TopichandleOpenClose} 
        Topicopen={Topicopen}
        handleClick={handleClick}
        topics={topics}
      />
      
      {
        kidsArray.length > 0 && (
          kidsArray.map((data,i) =>{
            const {name,age,avatar,topic} = data
            return(
              <div key={i} className="exist-learners" >
                <img src={avatar} alt="" />
                <p> {name} </p>
                <span>
                  <p> age: {age} </p>
                </span> 
                <button onClick={() => handleDeleteKid(name)} >
                    delete
                </button>
                <button onClick={() =>{
                  addtoEdit(data)
                }} > Edit </button>
                
              </div>
            )
          })
        )
      }
      
      <div className="container">
        <div>
          {/* form */}
          <form action="">
            <label htmlFor="name">
              First Name
              <input value={kisdData.name ? kisdData.name : ''} id='name' type="text" 
                onChange={(e) => {setkidsData({
                ...kisdData,
                name:e.target.value,
                })
                // setError(false)
                }} 
                />
              {
                Error.name && (
                  <p style={{color:"red"}} > Please enter your kid’s name  </p>
                )
              }
            </label>
            <label htmlFor="">
              Age
              <span className='dowArrow' > &#8964; </span>
              <select value={kisdData.age ? kisdData.age : ''} onChange={(e) => setkidsData({
                ...kisdData,
                age: e.target.value
              })} >
              
                <option >Age</option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
              </select>
            </label>
              {
                Error.age && (
                  <p style={{color:"red"}} > Please enter your kid’s age  </p>
                )
              }
          </form>


          {/* avatar */}
          <div className='Avatar-container' onClick={AvatarhandleOpenClose} >
            <img src={kisdData.avatar ? kisdData.avatar: Img} alt="metatesk" />
            <span className='bottom' >
              Edit
            </span>
          </div>

          {/* optional topic */}
          <div className='topics-container' >
            <p> (Optional) What topics do they like? </p>
            {
              topics.slice(0, 8).map((data,i) =>{
                const {name} = data
                
                return(
                  <div onClick={() => handleClick(i)}
                    key={i} className='topic'  >
                    <div className='topic2' style={{ display: topics[i].selected ? 'block' : 'none' }}>
                      <span>✓</span>
                    </div>
                    <div className={topics[i].selected ? '' :'gradient'} >
                      <p>
                        {name}
                      </p>
                    </div>
                  </div>
                )
              })
            }
            <div className='more' onClick={TopichandleOpenClose}>
              <p>+ More</p>
            </div>

          </div>
        </div>
          
        <div>
          <button onClick={() => saveLearner()} >
            Save learner
          </button>
        </div>

      </div>
      <div className='another-kid' > 
        <button onClick={() => handelKidsArray(kisdData)} > + Another kid </button>
      </div>
      
    </section>
  )
}

export default LearnerForm