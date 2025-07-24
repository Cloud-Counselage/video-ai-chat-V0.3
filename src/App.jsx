import Header from './components/Header';
import VideoInput from './components/VideoInput';
import Chat from './components/Chat';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main className="p-4">
        <VideoInput />
        <Chat />
      </main>
    </div>
  );
}
