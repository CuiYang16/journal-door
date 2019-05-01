export default function ({ store, redirect }) {
    // If the user is not authenticated
    let ctime= new Date().getTime();
 
    if (!store.state.auth||(!store.state.auth.time||ctime>(store.state.auth.time+60*60*11))) {
      return redirect('/login')
    }
  }
  