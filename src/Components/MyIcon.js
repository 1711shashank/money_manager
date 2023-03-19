import './MyIcon.css';
function MyIcon({ Icon, color }) {

    return (
        <>
            <div className='MyIcon'>
                <div className='MyIcon-Body'>
                    <Icon style={{ 'fontSize': '2rem' }} />
                </div>
            </div>
        </>
    );
}

export default MyIcon;
