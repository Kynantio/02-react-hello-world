const user = {
  name: 'Kynantio Candra Abrari / 2141720206',
  imageUrl: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/318757345_1768317733544742_15049451727927129_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGPS9QkY_tuyfLmUzw2bAVwePu-KJoP2eZ4-74omg_Z5rJt-Fee3D_CfrJz1re2C2T51T1yNACitYXf77RclWh0&_nc_ohc=n-SBeMhFs8IAX8w6kb4&_nc_ht=scontent-sin6-2.xx&oh=00_AfCtMEVC3GjUa_Bdcj8_eSiTSgodyG-SgYeFwwrDvtGpTQ&oe=65E15A0D',
  imageSize: 350,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}