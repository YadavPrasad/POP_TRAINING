import './profile.css'
import logo from '../../assets/bruh.jpg'

const Profile = () => {
  return (
    <div className='profile'>
      <img src={logo} alt="Logo" style={{ height: '200px', borderRadius: '150px', boxShadow: '0 0 20px rgba(171, 113, 14, 0.87)' }} />
      <h1><span>Hi I'm Yadav Prasad G B, </span> Student</h1>
      <p>I’m a passionate problem solver.I find immense joy in tackling code-related challenges on a daily basis.I’m open to
fields which deals with managing data and analytics.As a student I know the importance of the field in this everevolving landscape of the industry and I will give my fullest commitment to any work I’m been assigned and would
love to gain experience out of it.
</p>
    </div>
  );
};

export default Profile;