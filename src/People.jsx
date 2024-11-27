import {useEffect} from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
const People = ({people,setCurrentPerson,currentPerson}) => {
  const prevButton=()=>{
    setCurrentPerson((currentPerson)=>{
           const newPerson=(currentPerson-1+people.length)%people.length;
           return newPerson;
    })
  };
  const nextButton=()=>{
    setCurrentPerson((currentPerson)=>{
           const newPerson=(currentPerson+1)%people.length;
           return newPerson;
    })
  };
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      const newPerson=(currentPerson+1)%people.length;
      setCurrentPerson(newPerson);
      return () => {
        clearInterval(intervalId);
      };
    },5000);
    
  },[currentPerson]);
 return <section className='slide-section'>
  {people.map((person,personIndex)=>{
    const {id,image,name,title,quote}=person;
    return <article key={id} className='slide-article' style={{transform:`translateX(${100*(personIndex-currentPerson)}%)`,opacity:personIndex===currentPerson?1:0}}>
        <img src={image} alt={title} style={{width:"150px",height:"150px",objectFit:"cover",borderRadius:"50%",border:"4px solid var(--grey-200)",boxShadow:"1px 2px 5px var(--grey-200)",marginBottom:"-0.9rem"}}/>
        <p style={{color:"var(--primary-500)",textTransform:"uppercase",fontSize:"20px",marginBottom:"-1.2rem"}}>{name}</p>
        <p style={{textTransform:"capitalize"}}>{title}</p>
        <p style={{width:"600px",color:"var(--grey-500)",lineHeight:"30px",marginBottom:"20px"}}>{quote}</p>
        <FaQuoteRight style={{color:"var(--primary-500)",fontSize:"48px"}}/>
    </article>
  })}
  <button className='prev-button' onClick={prevButton}>
    <FiChevronLeft/></button>
    <button className='next-button' onClick={nextButton}>
    <FiChevronRight/></button>
 </section>
}

export default People