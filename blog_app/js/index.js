var firebaseConfig = {
    apiKey: "AIzaSyB5ZY45YF5RzZ-eP_GgA-Eswyule7frVFg",
    authDomain: "fitifitapp.firebaseapp.com",
    databaseURL: "https://fitifitapp-default-rtdb.firebaseio.com",
    projectId: "fitifitapp",
    storageBucket: "fitifitapp.appspot.com",
    messagingSenderId: "443712603898",
    appId: "1:443712603898:web:b5f92196349bc4a0002b43",
    measurementId: "G-5CKQ6K87C4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;


  $("#btn-login").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != "")
      {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : "+ errorMessage);
        });
      }
      else
      {
          window.alert("Please fill out all fields.");
      }
  });

  $("#btn-signup").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if(email != "" && password != "" && cPassword != "")
    {
      if(password == cPassword)
      {
        var result = firebase.auth().createUserWithEmailAndPassword(email, password);

      result.catch(function(error)
      {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert("Message : "+ errorMessage);
      });
      }
      else
      {
        window.alert("Password don't match with the Confirm Password.");
      }
    }
    else
    {
        window.alert("Please fill out all fields.");
    }
});

  $("#btn-logout").click(function()
  {
    firebase.auth().signOut();
  });

  $("#btn-resetPassword").click(function()
  {
    var auth =  firebase.auth();
    var email = $("#email").val();

    if(email != "")
    {
      auth.sendPasswordResetEmail(email).then(function()
      {
        window.alert("Email has been sent to you please check and verify..");
      })
      .catch(function(error)
      {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);

        window.alert("Message : "+ errorMessage);
      });
    }
    else
    {
      window.alert("Please write your e-mail firstly.");
    }
  });

  $("#btn-update").click(function()
  {
    var name = $("#name").val();
    var email = "deneme12345@hotmail.com";
    var image = "default";
    var uid = "1234567";

    var rootRef= firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid //
    var userRef = rootRef.child(userID);

    if(name !="")
    {
      var useData= 
      {
        "email": email,
        "image": image,
        "name": name,
        "uid": uid,
        
      };
      userRef.set(useData, function(error)
      {
        if(error)
        {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert("Message : "+ errorMessage);
        }
        else
        {
          window.location.href="MainPage.html";
        }
      });
    }
    else
    {
      window.alert("Please write your e-mail firstly.");
    }
  });
