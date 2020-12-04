import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function RoomDetails(props) {
  return (
    
      <View style={styles.container}>
        <ScrollView style={styles.scrollArea}>
          <View style={styles.rectStack}>
            <View style={styles.rect}>
              <View style={styles.part2}>
                <View style={styles.backgroundPart2}>
                  <Text style={styles.titlePart2}>Phòng đã xác thực</Text>
                  <Text style={styles.detailPart2}>
                    Phòng đã xác thực là phòng được chúng tôi bảo đảm chất lượng
                    và giá cả. Nơi bạn có thể yên tâm cọc giữ chỗ ngay trên ứng
                    dụng. Bạn sẽ không cần phải lo lắng mỗi khi đặt cọc giữ chỗ
                    với chủ nhà xa lạ nữa.
                  </Text>
                </View>
              </View>
              <View style={styles.part3}>
                <View style={styles.backgroundPart3}>
                  <Text style={styles.titlePart3}>Lưu ý</Text>
                  <Text style={styles.detailPart3}>SỨC CHỨA</Text>
                  <View style={styles.sucChuaText_Num}>
                    <View style={styles.tightText_NumRow}>
                      <Text style={styles.tightText_Num}>4 người +</Text>
                      <Text style={styles.fitText_Num}>2 người</Text>
                      <Text style={styles.wideText_Num}>1 người</Text>
                    </View>
                  </View>
                  <View style={styles.sucChua}>
                    <View style={styles.recTightRow}>
                      <View style={styles.recTight}></View>
                      <View style={styles.recFit}></View>
                      <View style={styles.recWide}></View>
                    </View>
                  </View>
                  <View style={styles.sucChuaText}>
                    <View style={styles.tightRow}>
                      <Text style={styles.tight}>Chật</Text>
                      <Text style={styles.fit}>Ổn</Text>
                      <Text style={styles.wide}>Rộng</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.part4}>
                <View style={styles.backgroundPart4}>
                  <Text style={styles.address}>Địa chỉ</Text>
                  <View style={styles.addressIconRow}>
                    <Svg viewBox="0 0 21 21" style={styles.addressIcon}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <View style={styles.addressDetailsStack}>
                      <Text style={styles.addressDetails}>
                        số 37 ngõ 61 Lê Văn Lương, Phường Trung Hòa, Quận Cầu
                        Giấy, Hà Nội
                      </Text>
                      <TouchableOpacity style={styles.button}>
                        <View style={styles.mapbuttonStack}>
                          <TouchableOpacity
                            style={styles.mapbutton}
                          ></TouchableOpacity>
                          <Text style={styles.maptext}>Chỉ đường</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.contactIconRow}>
                    <Svg viewBox="0 0 21 21" style={styles.contactIcon}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.contactDetails}>
                      Số điện thoại: 0123456789
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.part5}>
                <View style={styles.backgroundPart5}>
                  <Text style={styles.ngayDang}>Ngày đăng</Text>
                  <View style={styles.calendarIconRow}>
                    <Svg viewBox="0 0 21 21" style={styles.calendarIcon}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.homNay08112020}>
                      Hôm nay - 08/11/2020
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.part6}>
                <View style={styles.backgroundPart6}>
                  <Text style={styles.utility}>Tiện ích</Text>
                  <View style={styles.utilityIconGroup}>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon1}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon2}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon3}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon4}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                  </View>
                  <View style={styles.utilityIconGroup1}>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon5}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon6}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon7}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon8}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                  </View>
                  <View style={styles.utilityIconGroup2}>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon9}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon10}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon11}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 21 21" style={styles.utilityIcon12}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={11}
                        cy={11}
                        rx={11}
                        ry={11}
                      ></Ellipse>
                    </Svg>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.part7}>
                <View style={styles.backgroundPart7}>
                  <View style={styles.avaHostRow}>
                    <Svg viewBox="0 0 42 42" style={styles.avaHost}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={21}
                        cy={21}
                        rx={21}
                        ry={21}
                      ></Ellipse>
                    </Svg>
                    <View style={styles.hostNameColumn}>
                      <Text style={styles.hostName}>Sugary Pham</Text>
                      <Text style={styles.numberOfRooms}>1 phòng</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.part8}>
                <View style={styles.backgroundPart8}>
                  <Text style={styles.reportText}>Báo cáo sai phạm</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.part1}>
              <View style={styles.backgroundPart1}>
                <View style={styles.groupOfPicture}>
                  <View style={styles.picture1Row}>
                    <TouchableOpacity
                      style={styles.picture1}
                    ></TouchableOpacity>
                    <TouchableOpacity
                      style={styles.picture2}
                    ></TouchableOpacity>
                  </View>
                  <View style={styles.picture3Row}>
                    <TouchableOpacity
                      style={styles.picture3}
                    ></TouchableOpacity>
                    <TouchableOpacity
                      style={styles.picture4}
                    ></TouchableOpacity>
                    <TouchableOpacity
                      style={styles.picture5}
                    ></TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.timNguoiThue}>TÌM NGƯỜI THUÊ .</Text>
                <Text style={styles.nameOfRoom}>
                  Phòng cho thuê Đường Đồng me, Quận Nam Từ Liêm
                </Text>
                <View style={styles.priceGroup}>
                  <View style={styles.giaTrenUngDungRow}>
                    <Text style={styles.giaTrenUngDung}>
                      Giá trên ứng dụng:
                    </Text>
                    <Text style={styles.giaPhong}>1.500.000đ</Text>
                  </View>
                </View>
                <View style={styles.tongQuan}>
                  <View style={styles.nochange}>
                    <Text style={styles.conPhong}>CÒN PHÒNG</Text>
                    <Text style={styles.dienTich}>DIỆN TÍCH</Text>
                    <Text style={styles.datCoc}>ĐẶT CỌC</Text>
                  </View>
                  <View style={styles.changeable}>
                    <View style={styles.tinhTrangPhongRow}>
                      <Text style={styles.tinhTrangPhong}>Còn</Text>
                      <Text style={styles.dienTichPhong}>35m2</Text>
                      <Text style={styles.tienDatCoc}>500.000đ</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.line1}></View>
                <View style={styles.groupMark}>
                  <View style={styles.groupMarkIcon}>
                    <Svg viewBox="0 0 24.13 24.13" style={styles.markIcon1}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={12}
                        cy={12}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 24.13 24.13" style={styles.markIcon2}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={12}
                        cy={12}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 24.13 24.13" style={styles.markIcon3}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={12}
                        cy={12}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                    <Svg viewBox="0 0 24.13 24.13" style={styles.markIcon4}>
                      <Ellipse
                        stroke="rgba(230, 230, 230,1)"
                        strokeWidth={0}
                        fill="rgba(230, 230, 230,1)"
                        cx={12}
                        cy={12}
                        rx={12}
                        ry={12}
                      ></Ellipse>
                    </Svg>
                  </View>
                  <View style={styles.group3}>
                    <View style={styles.mark1Row}>
                      <Text style={styles.mark1}>0.3</Text>
                      <Text style={styles.mark2}>1.29</Text>
                      <Text style={styles.mark3}>2.59</Text>
                      <Text style={styles.mark4}>2.59</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            </View>
        </ScrollView>
        <View style={styles.footer}>
              <View style={styles.rect2}>
                <View style={styles.chatGroupRow}>
                  <TouchableOpacity style={styles.chatGroup}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Untitled")}
                      style={styles.chatButton}
                    >
                      <Text style={styles.chat}>Chat</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.holdPlaceGroup}>
                    <TouchableOpacity style={styles.holdPlaceButton}>
                      <Text style={styles.holdPlace}>Giữ chỗ</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.callGroup}>
                    <TouchableOpacity style={styles.callButton}>
                      <Text style={styles.call}>Gọi</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollArea: {
    width: "100%",
    height: 1548,
    alignSelf: "center"
  },
  scrollArea_contentContainerStyle: {
    height: 1548,
    width: "100%",
    overflow: "visible"
  },
  rect: {
    top: 345,
    left: 0,
    width: "100%",
    height: 1169,
    position: "absolute",
    backgroundColor: "rgba(236,236,236,1)",
    //borderBottomRightRadius: 2,
    //borderBottomLeftRadius: 2
  },
  part2: {
    width: "100%",
    height: 126,
    marginTop: 243
  },
  backgroundPart2: {
    width: "100%",
    height: 126,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11,
  },
  titlePart2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,49,128,1)",
    fontSize: 18,
    marginTop: 16,
    marginLeft: 21
  },
  detailPart2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 69,
    width: "80%",
    textAlign: "justify",
    fontSize: 12,
    marginTop: 10,
    marginLeft: 21
  },
  part3: {
    width: "100%",
    height: 126,
    marginTop: 4
  },
  backgroundPart3: {
    width: "100%",
    height: 135,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  titlePart3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 25
  },
  detailPart3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 13,
    marginLeft: 25
  },
  sucChuaText_Num: {
    width: "100%",
    height: 12,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 25
  },
  tightText_Num: {
    fontFamily: "roboto-regular",
    color: "rgba(255,168,49,1)",
    fontSize: 10
  },
  fitText_Num: {
    fontFamily: "roboto-regular",
    color: "rgba(0,214,131,1)",
    fontSize: 10,
    marginLeft: 96
  },
  wideText_Num: {
    fontFamily: "roboto-regular",
    color: "rgba(0,198,192,1)",
    fontSize: 10,
    marginLeft: 102
  },
  tightText_NumRow: {
    height: 12,
    flexDirection: "row",
    flex: 1,
  },
  sucChua: {
    width: "100%",
    height: 12,
    flexDirection: "row",
    marginTop: 3,
    marginHorizontal: 10,
  },
  recTight: {
    width: "25%",
    height: 12,
    backgroundColor: "rgba(255,168,49,1)",
    //borderRadius: 11
  },
  recFit: {
     width: "25%",
    height: 12,
    backgroundColor: "rgba(0,214,131,1)",
    borderRadius: 11,
    marginHorizontal: 10
   // marginLeft: 3
    
  },
  recWide: {
    width: "25%",
    height: 12,
    backgroundColor: "rgba(0,198,192,1)",
    borderRadius: 11,
   // marginLeft: 3
  },
  recTightRow: {
    height: 12,
    flexDirection: "row",
    flex: 1,
    //marginHorizontal: 10,
    justifyContent: "center"
  },
  sucChuaText: {
    width: "100%",
    height: 12,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 25
  },
  tight: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10
  },
  fit: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 127
  },
  wide: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 10,
    marginLeft: 124
  },
  tightRow: {
    height: 12,
    flexDirection: "row",
    flex: 1,
    marginRight: 1
  },
  part4: {
    width: "100%",
    height: 154,
    marginTop: 13
  },
  backgroundPart4: {
    width: "100%",
    height: 154,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  address: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 58,
    fontSize: 18,
    marginTop: 18,
    marginLeft: 25
  },
  addressIcon: {
    width: 21,
    height: 21,
    marginTop: 2
  },
  addressDetails: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 37,
    width: "80%",
    fontSize: 12
  },
  button: {
    top: 13,
    left: 230,
    width: 55,
    height: 18,
    position: "absolute"
  },
  mapbutton: {
    top: 0,
    left: 1,
    width: 53,
    height: 18,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  maptext: {
    top: 2,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(40,126,243,1)",
    fontSize: 12
  },
  mapbuttonStack: {
    width: 55,
    height: 18
  },
  addressDetailsStack: {
    width: 288,
    height: 37,
    marginLeft: 10
  },
  addressIconRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 25,
    marginRight: 16
  },
  contactIcon: {
    width: 21,
    height: 21
  },
  contactDetails: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 256,
    fontSize: 12,
    marginLeft: 10,
    marginTop: 3
  },
  contactIconRow: {
    height: 21,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 25,
    marginRight: 48
  },
  part5: {
    width: "100%",
    height: 106,
    marginTop: 4
  },
  backgroundPart5: {
    width: "100%",
    height: 106,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  ngayDang: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 24
  },
  calendarIcon: {
    width: 21,
    height: 21
  },
  homNay08112020: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 285,
    fontSize: 12,
    marginLeft: 11,
    marginTop: 4
  },
  calendarIconRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 24,
    marginRight: 19
  },
  part6: {
    width: "100%",
    height: 206,
    marginTop: 4
  },
  backgroundPart6: {
    width: "100%",
    height: 206,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  utility: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 19,
    marginLeft: 21
  },
  utilityIconGroup: {
    width: 273,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 23,
    marginLeft: 41
  },
  utilityIcon1: {
    width: 21,
    height: 21
  },
  utilityIcon2: {
    width: 21,
    height: 21
  },
  utilityIcon3: {
    width: 21,
    height: 21
  },
  utilityIcon4: {
    width: 21,
    height: 21
  },
  utilityIconGroup1: {
    width: 273,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 29,
    marginLeft: 43
  },
  utilityIcon5: {
    width: 21,
    height: 21
  },
  utilityIcon6: {
    width: 21,
    height: 21
  },
  utilityIcon7: {
    width: 21,
    height: 21
  },
  utilityIcon8: {
    width: 21,
    height: 21
  },
  utilityIconGroup2: {
    width: 273,
    height: 21,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 27,
    marginLeft: 43
  },
  utilityIcon9: {
    width: 21,
    height: 21
  },
  utilityIcon10: {
    width: 21,
    height: 21
  },
  utilityIcon11: {
    width: 21,
    height: 21
  },
  utilityIcon12: {
    width: 21,
    height: 21
  },
  part7: {
    width: "100%",
    height: 71,
    marginTop: 4
  },
  backgroundPart7: {
    width: "100%",
    height: 73,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  avaHost: {
    width: 42,
    height: 42
  },
  hostName: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  numberOfRooms: {
    fontFamily: "roboto-regular",
    color: "rgba(0,214,131,1)",
    fontSize: 10,
    marginTop: 2,
    marginLeft: 1
  },
  hostNameColumn: {
    width: 200,
    marginLeft: 15,
    marginTop: 4,
    marginBottom: 3
  },
  avaHostRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 24,
    marginRight: 197
  },
  part8: {
    width: "100%",
    height: 49,
    marginTop: 6
  },
  backgroundPart8: {
    width: "100%",
    height: 55,
    backgroundColor: "rgba(255,255,255,1)",
    //borderRadius: 11
  },
  reportText: {
    fontFamily: "roboto-regular",
    color: "rgba(255,168,49,1)",
    fontSize: 18,
    marginTop: 14,
    marginLeft: 108
  },
  part1: {
    top: 0,
    width: "100%",
    height: 584,
    position: "absolute",
    left: 0
  },
  backgroundPart1: {
    width: "100%",
    height: 584,
    backgroundColor: "rgba(255,255,255,1)",
    //borderBottomRightRadius: 11,
    //borderBottomLeftRadius: 11
  },
  groupOfPicture: {
    width: "100%",
    height: 298,
    marginLeft: 2
  },
  picture1: {
    width: "50%",
    height: 178,
    backgroundColor: "#E6E6E6"
  },
  picture2: {
    width: "50%",
    height: 178,
    backgroundColor: "#E6E6E6",
    marginLeft: 1
  },
  picture1Row: {
    height: 178,
    flexDirection: "row"
  },
  picture3: {
    width: "33%",
    height: 118,
    backgroundColor: "#E6E6E6"
  },
  picture4: {
    width: "33%",
    height: 118,
    backgroundColor: "#E6E6E6",
    marginLeft: 1
  },
  picture5: {
    width: "33%",
    height: 118,
    backgroundColor: "#E6E6E6",
    marginLeft: 2
  },
  picture3Row: {
    height: 118,
    flexDirection: "row",
    marginTop: 1
  },
  timNguoiThue: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    height: 16,
    width: 116,
    fontSize: 12,
    marginTop: 25,
    marginLeft: 21
  },
  nameOfRoom: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 65,
    width: 331,
    fontSize: 24,
    marginTop: 9,
    marginLeft: 20
  },
  priceGroup: {
    width: "100%",
   // height: 27,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 1
  },
  giaTrenUngDung: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    //height: 16,
    width: 184,
    fontSize: 14,
    textAlign: "right"
  },
  giaPhong: {
    fontFamily: "roboto-700",
    color: "rgba(255,49,128,1)",
    //height: 16,
    width: 167,
    fontSize: 14,
    textAlign: "left",
    marginLeft: 8
  },
  giaTrenUngDungRow: {
    //height: 16,
    flexDirection: "row",
    flex: 1
  },
  tongQuan: {
    height: 45,
    marginTop: 10,
    //marginLeft: 37
  },
  nochange: {
    width: "100%",
    //height: 16,
    flexDirection: "row",
    justifyContent: "center"
  },
  conPhong: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
   // height: 16,
    width: "33%",
    fontSize: 12,
    textAlign: "center", 
  },
  dienTich: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
   // height: 16,
    width: "33%",
    fontSize: 12,
    textAlign: "center",
    //marginHorizontal: 50
  },
  datCoc: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
   // height: 16,
    width: "33%",
    fontSize: 12,
    textAlign: "center",
  },
  changeable: {
    width: "100%",
    height: 24,
    flexDirection: "row",
    marginTop: 5,
  },
  tinhTrangPhong: {
    fontFamily: "roboto-regular",
    color: "rgba(255,49,128,1)",
   // height: 24,
    width: "33%",
    fontSize: 18,
    textAlign: "center",
   // backgroundColor: "red"
  },
  dienTichPhong: {
    fontFamily: "roboto-regular",
    color: "rgba(255,49,128,1)",
   // height: 24,
    width: "33%",
    fontSize: 18,
   // marginLeft: 32
   textAlign: "center",
   //marginHorizontal: 50,
  // backgroundColor: "green"
  },
  tienDatCoc: {
    fontFamily: "roboto-regular",
    color: "rgba(255,49,128,1)",
    //height: 24,
    width: "33%",
    fontSize: 18,
    textAlign: "center",
   // backgroundColor: "blue"
   // marginLeft: 32
  },
  tinhTrangPhongRow: {
    height: 24,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
    //marginRight: -7
  },
  line1: {
    height: 1,
    backgroundColor: "rgba(200,200,200,1)",
    marginTop: 14,
    marginHorizontal: 10
  },
  groupMark: {
   // width: 284,
    height: 43,
    marginTop: 10,
    marginHorizontal: 50
  },
  groupMarkIcon: {
   // width: 283,
    height: 29,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  markIcon1: {
    width: 24,
    height: 24
  },
  markIcon2: {
    width: 24,
    height: 24
  },
  markIcon3: {
    width: 24,
    height: 24
  },
  markIcon4: {
    width: 24,
    height: 24
  },
  group3: {
   // width: 280,
    height: 14,
    flexDirection: "row",
    marginLeft: 4
  },
  mark1: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  mark2: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12,
  //  marginLeft: 66
  },
  mark3: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12,
  //  marginLeft: 64
  },
  mark4: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12,
  //  marginLeft: 62
  },
  mark1Row: {
    height: 14,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  footer: {
    width: 343,
    height: 54,
    position: "relative",
    marginBottom: 25,
    alignSelf: "center"
  },
  rect2: {
    width: "100%",
    height: 80,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignSelf: "center"
  },
  chatGroup: {
    width: 112,
    height: 54,
  },
  chatButton: {
    width: 112,
    height: 54,
    backgroundColor: "rgba(40,126,243,1)",
    borderRadius: 10
  },
  chat: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginTop: 15,
    marginLeft: 37
  },
  holdPlaceGroup: {
    width: 112,
    height: 54,
    marginLeft: 3
  },
  holdPlaceButton: {
    width: 112,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "rgba(255,49,128,1)"
  },
  holdPlace: {
    fontFamily: "roboto-regular",
    color: "rgba(255,49,128,1)",
    fontSize: 17,
    marginTop: 15,
    marginLeft: 27
  },
  callGroup: {
    width: 112,
    height: 54,
    marginLeft: 4
  },
  callButton: {
    width: 112,
    height: 54,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(133,134,136,1)"
  },
  call: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 17,
    marginTop: 15,
    marginLeft: 42
  },
  chatGroupRow: {
    height: 54,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 8,
    marginTop: 13
  },
  rectStack: {
    width: "100%",
    height: 1516
  }
});

export default RoomDetails;