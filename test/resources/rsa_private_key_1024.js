import { Universal } from '@complycloud/asn1';

const { Sequence, Integer } = Universal;

const version = new Integer(0);
const modulus = new Integer('0xC63908C3FC141AE99C85A748D5EA6E52F543BCF18C589A4B07A39C819ACBA93D890AD44B54C3EA953CA0905C8653CCCC7F2DAE33A3BE36F7E1DA9AF4080137A03110F5E06EF036A92AC996723DF81C5E3E8FA561997CF2CFC36EF365C6FABB97EB1EB029425999F8F031B3215535C0FD5C638E7FC376F757BAB514CF51B98EB7');
const publicExponent = new Integer(0x010001);
const privateExponent = new Integer('0x997D326F67B33DBFA526CD09163388280EA8DC1682215DA03993142E3B69F66BA2C152EFDDFC329A4AAEDDF9F73DCE788F06153D014EDA0B89C49775DCF8EC536EA8340CEA247F1E453F8740E597B23D57DAC3DB9B1EFBAAEE27AB247C711E62089BB7ABC0F17A4789DDA427876B0016B9DA7B51B80A36473F5D8F192AAE0AB9');
const prime1 = new Integer('0xE3C141BC4AD06CC37AB1BE64E565A3F3F554D31AB80EF0A6CB483C44CDF94AC2E5C8A1E565F02F1846DFB010F9673F71FFCE6F7AAA2FDF835D707C9B393BD0C5');
const prime2 = new Integer('0xDECE31BC9FCFBBEB726DB60F2AF9CB9F046296F5D03D5BEB6CFB5ECFC6BF79144E49B09E828BA77FB536F6693DFEC9210D24C427AC3F9711694670443AC2214B');
const exponent1 = new Integer('0x7F5797CC92BC1483FBBF13E85006D373DCF10F93B9E3C89449C6DAC3D1B298257EDAFE02484BD1D92E0F75DF17C3ADCAACAF9CCF2606DC5F13C8883335FE06CD');
const exponent2 = new Integer('0x458989105BB853E829F07FCFC013F22F11094C202FFBD68265A31676368B6FD89C8E7727218B409DA50B2060BC4E96AB5014D77BA250BE6F5AB1F73BF432BE7D');
const coefficient = new Integer('0x30B41E00FA7C330DA21B03A3ECDFEBD695F53F470BA6DA8E79B572C0FA090800C4DF279777A93B211946F8C27EC6EFE231D5371448BECBB9C89C486929AC5CA7');

const rsaPrivateKey = new Sequence([
  version,
  modulus, // n
  publicExponent, // e
  privateExponent, // d
  prime1, // p
  prime2, // q
  exponent1, // d mod (p-1)
  exponent2, // d mod (q-1)
  coefficient, // (inverse of q) mod p
]);

export default rsaPrivateKey;
