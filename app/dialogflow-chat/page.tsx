import  {UserGuide} from "@/components/userguide";

export default function ChatPage() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Left sidebar with user guide */}
      <div className="w-1/8 bg-white p-4 border-r border-gray-200 overflow-y-auto">
        <UserGuide />
      </div>

      {/* Chat interface container */}
      <div className="w-80% relative">
        {/* Google Dialogflow Chat */}
        <div
          id="dialogflow-container"
          className="w-100 h-full overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: `
            <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css">
<script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
<df-messenger
  project-id="calm-library-455021-c0"
  agent-id="4c1f12bd-bab8-41dc-aaae-384812c7b1b6"
  language-code="es"
  storage-option="none"
  max-query-length="-1">
  <df-messenger-chat
    chat-title="Costo y Rentabilidad">
  </df-messenger-chat>
</df-messenger>
<style>
  df-messenger {
    z-index: 999;
    position: fixed;
    --df-messenger-font-color: #000;
    --df-messenger-font-family: Google Sans;
    --df-messenger-chat-background: #f3f6fc;
    --df-messenger-message-user-background: #d3e3fd;
    --df-messenger-message-bot-background: #fff;
    top: 0;
    left: 40%;
    right: 0;
    bottom: 0;
    width: 80% ;
    height: 100vh !important;
    border-radius: 0 !important;
  }
  
  df-messenger-chat {
    height: calc(100vh - 60px) !important;
  }
  
  df-messenger-user-input {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100% !important;
    max-width: 100% !important;
  }
</style>
            
  

<a href="/api/auth/signout?callbackUrl=/login" 
   style="
     position: fixed; 
     top: 28px; 
     right: 30px; 
     color: black; 
     font-size: 1.1rem; 
     font-family: 'Google Sans', sans-serif;
     text-decoration: none; 
     z-index: 9999;
   "
>
  Cerrar sesión
</a>




            `
          }}
        />
        
        
      </div>
    </div>
  );
}