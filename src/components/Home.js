import Notes from './Notes';

export const Home = (props) => {
   const showAlert=props.showAlert;
    return (
        <div className="container"> 
            <Notes showAlert={showAlert}/>
        </div>
    )
}
