import { Html, useProgress } from "@react-three/drei"

const Loader = () => {

  const {progress} = useProgress();

  return (
    <Html>
      <span className="loader-span">
        <p style={{
          fontWeight: 'bold',
          backgroundColor: 'rgba(145, 94, 255, 0.2)',
          padding: 10,
          borderRadius: 10,
        }}>
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  )
}

export default Loader