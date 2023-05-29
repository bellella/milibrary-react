import { Animate } from "@milibrary/core";
import { Flex, Font } from "@milibrary/mi-style";
import { Animater } from "@milibrary/react-interaction";

const PageLoading = () => {
  const disappear = Animate().setKeyframes([{ opacity: '1' }, { opacity: '0' }])
    .setDuration(1500).setEasing('ease-in-out').setDelay(1000);
  const spin = Animate().setKeyframes([{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }]).setIterations(5).setDuration(1500).setEasing('ease-in-out');
  return (
    <Animater isPlay={true} animation={disappear}><Flex background="primary" width="100%" height="100%"
      position="fixed" zIndex={1000} flexFlow="column" justifyContent="center" alignItems="center">
      <Animater isPlay={true} animation={spin}>
        <Font fontSize="7rem" color="onAccent" textAlign="center" position="relative">❁</Font>
      </Animater>
      <Font set="p1" color="onAccent" textAlign="center" position="relative">...Loading</Font>
    </Flex>
    </Animater>
  )
}

export default PageLoading;