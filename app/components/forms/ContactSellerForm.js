import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Yup from "yup";
import { AppForm as Form, AppFormField as FormField, SubmitButton } from ".";
import { sendMessage } from "../../../api/auth";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();


    sendMessage(message,listing.id).then(res=>{
      console.log(res)
      resetForm();
      Notifications.scheduleNotificationAsync({
        content:{
          title: "Awesome!",
          body: "Your message was sent to the seller.",
        },
        trigger:null
      })
    }).catch(err=>{
      console.log(err);
      Alert.alert("Error", "Could not send the message to the seller.");
    })
    // const result = await messagesApi.send(message, listing.id);

    // if (!result.ok) {
    //   console.log("Error", result);
    //   return Alert.alert("Error", "Could not send the message to the seller.");
    // }

   

    // Notifications.presentLocalNotificationAsync({
    //   title: "Awesome!",
    //   body: "Your message was sent to the seller.",
    // });
    
  };

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
