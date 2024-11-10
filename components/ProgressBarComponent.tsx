'use client'

import ProgressBar from '@ramonak/react-progress-bar'

type Props = {
  progress: number;
  color?: string;
}

const ProgressBarComponent = ({progress, color} : Props) => {
  return (
    <ProgressBar completed={progress}
      animateOnRender={true}
      bgColor={color}
    />
  )
}

export default ProgressBarComponent