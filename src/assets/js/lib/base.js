/******* 3DES ******/
function des(r, e, t, h, a, c) {
  var tempresult, result;
  var n, y, s, l, f, o, i, g, A, p, d, C, b, w, u = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756),
    _ = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344),
    m = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584),
    v = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928),
    k = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080),
    x = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312),
    S = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154),
    K = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696),
    F = des_createKeys(r),
    I = 0,
    $ = e.length,
    j = 0,
    q = 32 == F.length ? 3 : 9;
  for (g = 3 == q ? t ? new Array(0, 32, 2) : new Array(30, -2, -2) : t ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2), 2 == c ? e += "        " : 1 == c ? (s = 8 - $ % 8, e += String.fromCharCode(s, s, s, s, s, s, s, s), 8 == s && ($ += 8)) : c || (e += "\0\0\0\0\0\0\0\0"), result = "", tempresult = "", 1 == h && (A = a.charCodeAt(I++) << 24 | a.charCodeAt(I++) << 16 | a.charCodeAt(I++) << 8 | a.charCodeAt(I++), d = a.charCodeAt(I++) << 24 | a.charCodeAt(I++) << 16 | a.charCodeAt(I++) << 8 | a.charCodeAt(I++), I = 0); $ > I;) {
    for (o = e.charCodeAt(I++) << 24 | e.charCodeAt(I++) << 16 | e.charCodeAt(I++) << 8 | e.charCodeAt(I++), i = e.charCodeAt(I++) << 24 | e.charCodeAt(I++) << 16 | e.charCodeAt(I++) << 8 | e.charCodeAt(I++), 1 == h && (t ? (o ^= A, i ^= d) : (p = A, C = d, A = o, d = i)), s = 252645135 & (o >>> 4 ^ i), i ^= s, o ^= s << 4, s = 65535 & (o >>> 16 ^ i), i ^= s, o ^= s << 16, s = 858993459 & (i >>> 2 ^ o), o ^= s, i ^= s << 2, s = 16711935 & (i >>> 8 ^ o), o ^= s, i ^= s << 8, s = 1431655765 & (o >>> 1 ^ i), i ^= s, o ^= s << 1, o = o << 1 | o >>> 31, i = i << 1 | i >>> 31, y = 0; q > y; y += 3) {
      for (b = g[y + 1], w = g[y + 2], n = g[y]; n != b; n += w) {
        l = i ^ F[n], f = (i >>> 4 | i << 28) ^ F[n + 1], s = o, o = i, i = s ^ (_[63 & l >>> 24] | v[63 & l >>> 16] | x[63 & l >>> 8] | K[63 & l] | u[63 & f >>> 24] | m[63 & f >>> 16] | k[63 & f >>> 8] | S[63 & f])
      }
      s = o, o = i, i = s
    }
    o = o >>> 1 | o << 31, i = i >>> 1 | i << 31, s = 1431655765 & (o >>> 1 ^ i), i ^= s, o ^= s << 1, s = 16711935 & (i >>> 8 ^ o), o ^= s, i ^= s << 8, s = 858993459 & (i >>> 2 ^ o), o ^= s, i ^= s << 2, s = 65535 & (o >>> 16 ^ i), i ^= s, o ^= s << 16, s = 252645135 & (o >>> 4 ^ i), i ^= s, o ^= s << 4, 1 == h && (t ? (A = o, d = i) : (o ^= p, i ^= C)), tempresult += String.fromCharCode(o >>> 24, 255 & o >>> 16, 255 & o >>> 8, 255 & o, i >>> 24, 255 & i >>> 16, 255 & i >>> 8, 255 & i), j += 8, 512 == j && (result += tempresult, tempresult = "", j = 0)
  }
  return result += tempresult, result = result.replace(/\0*$/g, "")
}

function des_createKeys(r) {
  var left, right;
  var i;
  var pc2bytes0 = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964),
    pc2bytes1 = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697),
    pc2bytes2 = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272),
    pc2bytes3 = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144),
    pc2bytes4 = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256),
    pc2bytes5 = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488),
    pc2bytes6 = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746),
    pc2bytes7 = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568),
    pc2bytes8 = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578),
    pc2bytes9 = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488),
    pc2bytes10 = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800),
    pc2bytes11 = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744),
    pc2bytes12 = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128),
    pc2bytes13 = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261);
  for (var e, t, h, a = r.length > 8 ? 3 : 1, c = new Array(32 * a), n = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), y = 0, s = 0, l = 0; a > l; l++) {
    for (left = r.charCodeAt(y++) << 24 | r.charCodeAt(y++) << 16 | r.charCodeAt(y++) << 8 | r.charCodeAt(y++), right = r.charCodeAt(y++) << 24 | r.charCodeAt(y++) << 16 | r.charCodeAt(y++) << 8 | r.charCodeAt(y++), h = 252645135 & (left >>> 4 ^ right), right ^= h, left ^= h << 4, h = 65535 & (right >>> -16 ^ left), left ^= h, right ^= h << -16, h = 858993459 & (left >>> 2 ^ right), right ^= h, left ^= h << 2, h = 65535 & (right >>> -16 ^ left), left ^= h, right ^= h << -16, h = 1431655765 & (left >>> 1 ^ right), right ^= h, left ^= h << 1, h = 16711935 & (right >>> 8 ^ left), left ^= h, right ^= h << 8, h = 1431655765 & (left >>> 1 ^ right), right ^= h, left ^= h << 1, h = left << 8 | 240 & right >>> 20, left = right << 24 | 16711680 & right << 8 | 65280 & right >>> 8 | 240 & right >>> 24, right = h, i = 0; i < n.length; i++) {
      n[i] ? (left = left << 2 | left >>> 26, right = right << 2 | right >>> 26) : (left = left << 1 | left >>> 27, right = right << 1 | right >>> 27), left &= -15, right &= -15, e = pc2bytes0[left >>> 28] | pc2bytes1[15 & left >>> 24] | pc2bytes2[15 & left >>> 20] | pc2bytes3[15 & left >>> 16] | pc2bytes4[15 & left >>> 12] | pc2bytes5[15 & left >>> 8] | pc2bytes6[15 & left >>> 4], t = pc2bytes7[right >>> 28] | pc2bytes8[15 & right >>> 24] | pc2bytes9[15 & right >>> 20] | pc2bytes10[15 & right >>> 16] | pc2bytes11[15 & right >>> 12] | pc2bytes12[15 & right >>> 8] | pc2bytes13[15 & right >>> 4], h = 65535 & (t >>> 16 ^ e), c[s++] = e ^ h, c[s++] = t ^ h << 16
    }
  }
  return c
}

function pad(r) {
  for (var e = r.length; 24 > e; e++) {
    r += "0"
  }
  return r
}

function genkey(r) {
  return {
    key: pad(r.slice(0, 48)),
    vector: r.slice(48, 64)
  }
}

function chars_from_hex(r) {
  var e = "";
  r = r.replace(/^(0x)?/g, ""), r = r.replace(/[^A-Fa-f0-9]/g, ""), r = r.split("");
  for (var t = 0; t < r.length; t += 2) {
    e += String.fromCharCode(parseInt(r[t] + "" + r[t + 1], 16))
  }
  return e
}

function hex_from_chars(r) {
  var e = "",
    t = "",
    h = "0123456789abcdef";
  h = h.split("");
  for (var a, c, n = r.split(""), a = 0; a < n.length; a++) {
    a > 0 && (t += e), !e && 0 == a % 32 && a > 0 && (t = t), c = r.charCodeAt(a), t += h[15 & c >> 4] + h[15 & c]
  }
  return t
}

function encrypt_string(r, e) {
  r = chars_from_hex(genkey(r).key);
  var t = des(r, e, 1, 0, 0, 1);
  return hex_from_chars(t)
}

function decrypt_string(r, e) {
  return r = chars_from_hex(genkey(r).key), e = chars_from_hex(e), des(r, e, 0, 0, 0, genkey(r).vector)
};

/******* Base ******/
import base64 from './base64'
// import toMd5 from 'md5-hex'
import toMd5 from 'md5hex'
import qs from 'qs'
import toSha1 from 'sha1-hex'
class Base {
  constructor() {
    this.toBase64 = base64.encode
    this.fromBase64 = base64.decode
    this.toJson = qs.stringify
    this.fromJson = qs.parse
    this.toMd5 = toMd5
    this.toSha1 = toSha1
    this.to3Des = des
    this.encrypt = encrypt_string
    this.decrypt = decrypt_string
  }
}
export default new Base()