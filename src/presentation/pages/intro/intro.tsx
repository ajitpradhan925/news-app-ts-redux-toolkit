import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {slides} from '@configs/const';

const Intro = ({...props}) => {
  const {navigation} = props;

  const _renderItem = ({item}: any) => {
    return (
      <View style={styles().slide}>
        <View style={styles().titleContainer}>
          <Text style={styles().title}>{item.title}</Text>
        </View>

        <View style={styles().imageContainer}>
          <Image source={item.image} style={styles().image} />
        </View>

        <View style={styles().textContainer}>
          <Text style={styles().text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles().buttonCircle}>
        <Ion
          name="arrow-forward-outline"
          color="rgba(255,255,255, .9 )"
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles().buttonCircle}>
        <Ion name="md-checkmark" color="rgba(255,255,255, .9 )" size={24} />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles().skipView}>
        <Text style={styles().skipTextColor}>Skip</Text>
      </View>
    );
  };

  const _onEndReached = () => {
    // updateOnboarding(true);
    navigation.navigate('login');
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      onDone={_onEndReached}
      onSkip={_onEndReached}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
    />
  );
};

export default Intro;

// Onboarding.propTypes = {
//     isOnboardingDisabled: PropTypes.bool.isRequired,
//     updateOnboarding: PropTypes.func.isRequired
// }

// const mapStateToProps = (state: any) => {
//     return {
//         isOnboardingDisabled: state.auth.isOnboardingDisabled
//     }
// }

// const mapDispatchToProps = (dispatch: any) => ({
//     updateOnboarding: (status) => dispatch(authAction.updateOnboarding(status))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
