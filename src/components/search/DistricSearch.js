import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CalendarPicker from 'react-native-calendar-picker';

class DistricSearch extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.headerStack}>

          <View style={styles.header}>
            <View style={styles.headerRec}>
              <Text style={styles.headerText}>Tìm theo nhiều quận</Text>
            </View>
            <View style={styles.headerLine}></View>
          </View>

          <ScrollView style={styles.scrollArea}>
              <View style={styles.whiteBackground}>

                <TouchableOpacity style={styles.chonNgay}>
                  <Text style={styles.canPhongTruocNgay}>
                    BẠN CẦN PHÒNG TRƯỚC NGÀY NÀO
                  </Text>
                  <View style={styles.chonNgayTextRow}>
                    <Text style={styles.chonNgayText}>Nhấp để chọn ngày</Text>
                    <View style={styles.chonNgayTextFiller}></View>
                    <EntypoIcon
                      name="chevron-thin-down"
                      style={styles.chonNgayIcon}
                    ></EntypoIcon>
                  </View>
                  <View style={styles.chonNgayLine}></View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loaiPhong}>
                  <Text style={styles._LoaiPhong}>LOẠI PHÒNG</Text>
                  <View style={styles.chonLoaiPhongRow}>
                    <Text style={styles.chonLoaiPhong}>
                      Kí túc xá, phòng cho thuê...
                    </Text>
                    <View style={styles.chonLoaiPhongFiller}></View>
                    <EntypoIcon
                      name="chevron-thin-down"
                      style={styles.loaiPhongIcon}
                    ></EntypoIcon>
                  </View>
                  <View style={styles.loaiPhongLine}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gioiTinh}>
                  <Text style={styles._GioiTinh}>GIỚI TÍNH</Text>
                  <View style={styles.chonGioiTinhRow}>
                    <Text style={styles.chonGioiTinh}>
                      Nhấp để chọn giới tính
                    </Text>
                    <View style={styles.chonGioiTinhFiller}></View>
                    <EntypoIcon
                      name="chevron-thin-down"
                      style={styles.gioiTinhIcon}
                    ></EntypoIcon>
                  </View>
                  <View style={styles.gioiTinhLine}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mucGia}>
                  <Text style={styles._MucGia}>MỨC GIÁ</Text>
                  <View style={styles.chonMucGiaRow}>
                    <Text style={styles.chonMucGia}>Nhấp để chọn mức giá</Text>
                    <View style={styles.chonMucGiaFiller}></View>
                    <EntypoIcon
                      name="chevron-thin-down"
                      style={styles.mucGiaIcon}
                    ></EntypoIcon>
                  </View>
                  <View style={styles.mucGiaLine}></View>
                </TouchableOpacity>
                <View style={styles.khuVucStack}>
                  <View style={styles.khuVuc}>
                    <Text style={styles.khuVucText}>KHU VỰC</Text>
                    <View style={styles.buttonRow}>
                      <TouchableOpacity style={styles.button}>
                        <View style={styles.quan}>
                          <Text style={styles.quanText}>Đống Đa</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button2}>
                        <View style={styles.quan1}>
                          <Text style={styles.cauGiay}>Cầu Giấy</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button3Row}>
                      <TouchableOpacity style={styles.button3}>
                        <View style={styles.quan2}>
                          <Text style={styles.thanhXuan}>Thanh Xuân</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button4}>
                        <View style={styles.quan3}>
                          <Text style={styles.haiBaTrưng}>Hai Bà Trưng</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button5Row}>
                      <TouchableOpacity style={styles.button5}>
                        <View style={styles.quan4}>
                          <Text style={styles.longBien}>Long Biên</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button6}>
                        <View style={styles.quan5}>
                          <Text style={styles.hoanKiem}>Hoàn Kiếm</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button7Row}>
                      <TouchableOpacity style={styles.button7}>
                        <View style={styles.quan6}>
                          <Text style={styles.baDinh}>Ba Đình</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button8}>
                        <View style={styles.quan7}>
                          <Text style={styles.hoangMai}>Hoàng Mai</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.button10Row}>
                      <TouchableOpacity style={styles.button10}>
                        <View style={styles.quan8}>
                          <Text style={styles.haDong}>Hà Đông</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button9}>
                        <View style={styles.quan9}>
                          <Text style={styles.tayHo}>Tây Hồ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
          </ScrollView>
          

          <View style={styles.footer}>
            <View style={styles.footerRec}>
              <TouchableOpacity style={styles.tim}>
                <View style={styles.timPhongButton}>
                  <Text style={styles.timPhong}>Tìm phòng</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.huy}>
                <View style={styles.huyButton}>
                  <Text style={styles.huyTimKiem}>Hủy</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center"
  },
  background: {
    width: 740,
    height: 740,
    backgroundColor: "rgba(230,230,230,0.6)",
    position: "relative",
    alignSelf: "center",
  },
  header: {
    top: 0,
    height: 51,
    position: "absolute",
    width: 314,
    left: 0
  },
  headerRec: {
    width: 314,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    //borderTopLeftRadius: 11,
    //borderTopRightRadius: 11
  },
  headerText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 68
  },
  headerLine: {
    width: 314,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  scrollArea: {
    top: 0,
    width: 314,
    height: 672,
    position: "absolute",
    left: 0
  },
  scrollArea_contentContainerStyle: {
    height: 672,
    width: 314
  },
  whiteBackground: {
    width: 314,
    height: 621,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 11,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 51
  },
  chonNgay: {
    width: 287,
    height: 46,
    marginTop: 20,
    marginLeft: 14
  },
  canPhongTruocNgay: {
    fontFamily: "roboto-300",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonNgayText: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonNgayTextFiller: {
    flex: 1,
    flexDirection: "row"
  },
  chonNgayIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    marginTop: 2
  },
  chonNgayTextRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 7,
    marginRight: 2
  },
  chonNgayLine: {
    width: 287,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 2
  },
  loaiPhong: {
    width: 287,
    height: 42,
    marginTop: 17,
    marginLeft: 14
  },
  _LoaiPhong: {
    fontFamily: "roboto-300",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonLoaiPhong: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonLoaiPhongFiller: {
    flex: 1,
    flexDirection: "row"
  },
  loaiPhongIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    marginTop: 1
  },
  chonLoaiPhongRow: {
    height: 16,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 2
  },
  loaiPhongLine: {
    width: 287,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 3
  },
  gioiTinh: {
    width: 287,
    height: 39,
    marginTop: 21,
    marginLeft: 14
  },
  _GioiTinh: {
    fontFamily: "roboto-300",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonGioiTinh: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonGioiTinhFiller: {
    flex: 1,
    flexDirection: "row"
  },
  gioiTinhIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 14
  },
  chonGioiTinhRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 2
  },
  gioiTinhLine: {
    width: 287,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 3
  },
  mucGia: {
    width: 287,
    height: 39,
    marginTop: 21,
    marginLeft: 14
  },
  _MucGia: {
    fontFamily: "roboto-300",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonMucGia: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  chonMucGiaFiller: {
    flex: 1,
    flexDirection: "row"
  },
  mucGiaIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 14
  },
  chonMucGiaRow: {
    height: 15,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 2
  },
  mucGiaLine: {
    width: 287,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 3
  },
  khuVuc: {
    top: 0,
    left: 14,
    width: 271,
    height: 254,
    position: "absolute"
  },
  khuVucText: {
    fontFamily: "roboto-300",
    color: "rgba(133,134,136,1)",
    fontSize: 12
  },
  button: {
    width: 127,
    height: 37
  },
  quan: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  quanText: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 37
  },
  button2: {
    width: 127,
    height: 37,
    marginLeft: 17
  },
  quan1: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  cauGiay: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 37
  },
  buttonRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 12
  },
  button3: {
    width: 127,
    height: 37
  },
  quan2: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  thanhXuan: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 27
  },
  button4: {
    width: 127,
    height: 37,
    marginLeft: 16
  },
  quan3: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  haiBaTrưng: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 25
  },
  button3Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 11,
    marginRight: 1
  },
  button5: {
    width: 127,
    height: 37
  },
  quan4: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  longBien: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 36
  },
  button6: {
    width: 127,
    height: 37,
    marginLeft: 17
  },
  quan5: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  hoanKiem: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 31
  },
  button5Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 11
  },
  button7: {
    width: 127,
    height: 37
  },
  quan6: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  baDinh: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 43
  },
  button8: {
    width: 127,
    height: 37,
    marginLeft: 17
  },
  quan7: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  hoangMai: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 31
  },
  button7Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 11
  },
  button10: {
    width: 127,
    height: 37
  },
  quan8: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  haDong: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 38
  },
  button9: {
    width: 127,
    height: 37,
    marginLeft: 17
  },
  quan9: {
    width: 127,
    height: 37,
    backgroundColor: "rgba(236,236,236,1)",
    borderRadius: 8
  },
  tayHo: {
    fontFamily: "roboto-regular",
    color: "rgba(133,134,136,1)",
    marginTop: 10,
    marginLeft: 44
  },
  button10Row: {
    height: 37,
    flexDirection: "row",
    marginTop: 10
  },
  footer: {
    top: 500,
    width: 314,
    height: 112,
    position: "relative",
    alignSelf: "center",
    
  },
  footerRec: {
    width: 314,
    height: 112,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 11,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  tim: {
    width: 287,
    height: 44,
    marginTop: 14,
    marginLeft: 13
  },
  timPhongButton: {
    width: 287,
    height: 44,
    backgroundColor: "rgba(40,126,243,1)",
    borderRadius: 11
  },
  timPhong: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 102
  },
  huy: {
    width: 287,
    height: 44,
    marginTop: 6,
    marginLeft: 13
  },
  huyButton: {
    width: 287,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 11
  },
  huyTimKiem: {
    fontFamily: "roboto-regular",
    color: "rgba(40,126,243,1)",
    fontSize: 18,
    marginTop: 11,
    marginLeft: 128
  },
  khuVucStack: {
    width: 314,
    height: 358,
    marginTop: 18
  },
  headerStack: {
    top: 0,
    width: 314,
    height: 672,
    alignSelf:"center",
  }
});

export default DistricSearch;