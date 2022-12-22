import react from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import AppText from '../components/Text';
import * as Progress from "react-native-progress"
import colors from '../config/colors';
import LottieView from "lottie-react-native"

function UploadScreen({ progress = 0, visible = false,  onDone}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ? <Progress.Bar
                    color={colors.primary}
                    progress={progress}
                    width={200}
                /> :
                    <LottieView
                    onAnimationFinish={onDone}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        source={require('../assets/animations/done.json')} />
                }
                {/* <LottieView 
                autoPlay
                loop
                 source={require('../assets/animations/done.json')}/> */}
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    animation: {
        width: 150
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})
export default UploadScreen;