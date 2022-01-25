import React from "react";
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Post() {
  return (
   <ScrollView>
        <ImageBackground
        style={style.cover}
        source={require("../assets/LiveCover/cover2.jpg")}
      ></ImageBackground>
      <View style={style.container}>
        <Text style={style.title}>রণতরীর ওপর ভেঙে পড়লো মার্কিন যুদ্ধবিমান, আহত ৭</Text>
        <Text style={style.para}>
          দক্ষিণ চীন সাগরে যুক্তরাষ্ট্রের একটি এফ-৩৫ যুদ্ধবিমান বিধ্বস্ত হয়ে সাত
          মার্কিন সেনা আহত হয়েছেন। মার্কিন নৌবাহিনী জানিয়েছে, রুটিন মহড়ার সময়
          ওই যুদ্ধবিমানটি রণতরীর ওপর ভেঙে পড়ে। তবে ঠিক কী কারণে দুর্ঘটনাটি
          ঘটেছে, তা নিয়ে তদন্ত করছে সংস্থাটি। সোমবার (২৪ জানুয়ারি) যুদ্ধবিমানটি
          অবতরণের সময় বিধ্বস্ত হয়। এ সময় পাইলট দ্রুত প্যারাস্যুট নিয়ে ঝাঁপিয়ে
          পড়েন। পরে তাকে গুরুতর আহতাবস্থায় উদ্ধার করে হাসপাতালে ভর্তি করা হয়।
          দক্ষিণ চীনে অবস্থানরত রণতরী ইউএসএস কার্ল ভিনসনের ওপর বিধ্বস্ত হয়
          এফ-৩৫। এতে আরও ছয় মার্কিন নৌসেনা আহত হন। আশঙ্কাজনক অবস্থায় তিন সেনাকে
          ম্যানিলার একটি হাসপাতালে পাঠানো হয়েছে। যুক্তরাষ্ট্রের নৌবাহিনীর পক্ষ
          থেকে এক বিবৃতিতে বলা হয়েছে—দক্ষিণ চীন সাগরে রুটিন মহড়ায় গিয়ে কিছু
          সমস্যার মুখোমুখি হয় যুদ্ধবিমানটি। বিমানের পাইলটকে যুক্তরাষ্ট্রের সেনা
          হেলিকপ্টার উদ্ধার করেছে। এদিকে দক্ষিণ চীন সাগরে নিজেদের কর্তৃত্ব ধরে
          রাখতে সব রকম চেষ্টা চালাচ্ছে বেইজিং। আবার বারবার সামরিক মহড়া চালিয়ে
          নিজেদের প্রভাব বজায় রাখতে মরিয়া যুক্তরাষ্ট্র। এ অবস্থায় দক্ষিণ চীন
          সাগরে মার্কিন যুদ্ধবিমান বিধ্বস্ত হওয়ার ঘটনায় পরিস্থিতি আরও উত্তপ্ত
          হতে পারে বলে মনে করছে আন্তর্জাতিক সম্প্রদায়। বাংলাদেশ সময়: ২০১০ ঘণ্টা,
          জানুয়ারি ২৫, ২০২২
        </Text>
      </View>
   </ScrollView>
  );
}

const style = StyleSheet.create({
  cover: {
    width: Dimensions.get("window").width,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  para: {
    fontSize: 16,
    textAlign: "left",
    marginTop:20
  },
});
