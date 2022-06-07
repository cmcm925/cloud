function cloudErrorLang(error) {
    var type = {
        'ko': 0,
        'ko-KR': 0,
        'en-US': 1,
        'ja': 2,
        'ja-JP': 2,
        'cn': 3,
        'zh-cn': 3
    }

    var text = [
        [{
            // 자동 연결삭제
            1000: "잘못된 CERT ID 입니다",  

            //Origin 체크
            1900: "Origin 정보가 없습니다.",
            1901: "Origin 체크 내부 로직(DB 또는 라이브러리) 오류입니다.",
            1902: "Origin 라이선스 오류입니다.",
            
            // 1 UIError
            2000: "창을 종료했습니다",

            // UI_JOIN
            2005: "모든 이용약관에 동의하지 않았습니다",

            // UI GENERATE_SIGNATURE 
            2010: "잘못된 인증서 정보입니다",
            2011: "잘못된 PIN 형식입니다",

            // UI IMPORTFILE 
            2020: "파일을 선택해주세요",
            2021: "파일 업로드 중 에러가 발생했습니다",
            2022: "잘못된 인증서 형식입니다",
            2023: "잘못된 타입의 파일입니다",

            // UI ChangePIN
            2031: "핀번호가 동일합니다",
            2032: "핀번호가 다릅니다",

            // MO 에러
            2041: "MO 검증을 실패했습니다",
            2042: "MO 시간을 초과했습니다",

            // UI RELAYIMPORT
            2051: "인증코드 생성에 실패했습니다",
            2052: "relayImport 실패 : 인증서 복사에 실패했습니다(보내는 단말에 인증번호를 입력해주세요)",

            // UI BILLING
            2061: "인증서 발급에 실패했습니다",

            // UI_CONNECT
            2071: "모든 정보를 입력하세요",
            2072: "15자 이내의 이름을 입력하세요",
            2073: "형식에 맞지 않는 핸드폰 번호입니다",
            2074: "형식에 맞지 않는 생년월일입니다",

            // UI_ISSUE
            2081: "올바른 참조번호와 인가코드를 입력해주세요",

            // 즐겨찾기 에러
            2091: "로컬스토리지 사용 중 에러가 발생했습니다",
            
            // UI vikie 
            2100: "최소 6자리가 입력되어야 합니다",
            2101: "키패드 로딩중 오류가 발생했습니다",
            2102: "핀번호를 입력하세요",
            2103: "입력한 핀번호가 일치하지 않습니다",
            2104: "핀번호 자리수가 일치하지 않습니다",
            2105: "같은 문자가 연속되어 입력되었습니다",
            2106: "연속된 숫자가 입력되었습니다",
            2107: "허용되지 않은 패턴입니다",
            

            // UI_EXPORT 에러
            2120: "아직 지원되지 않는 기능입니다",
            2121: "입력한 두 개의 비밀번호가 다릅니다",
            2122: "전자봉투 작업에서 에러가 발생했습니다",

            // UI_IMPORT 에러
            2130: "비대칭키 생성에 실패했습니다",
            2131: "전자봉투 복호화 작업에서 에러가 발생했습니다",

            // UICertPassword 
            2200: "비밀번호를 입력하세요",

            // UIInputpin
            2210: "핀번호를 입력하세요",


            // 2 ServiceError
            // ServiceError 비밀번호 변경
            3101: "전문 json이 형식에 어긋납니다",
            3102: "개인키 형식에 맞지 않습니다",
            3103: "개인키 형식에 맞지 않습니다",
            3104: "키분배용 인증서 개인키 형식에 맞지 않습니다",
            3105: "키분배용 인증서 개인키 형식에 맞지 않습니다",


            // ServiceError 전자서명
            3201: "전문 json이 형식에 맞지 않습니다",
            3202: "개인키 복호화에 실패했습니다",
            3203: "전자서명에 실패했습니다",
            3204: "Random 추출에 실패했습니다",
            3205: "Random 추출에 실패했습니다",

            // ServiceError 인증서 리스트
            3401: "전문 json이 형식에 맞지 않습니다",

            // ServiceError 비밀번호 검증
            3701: "비밀번호 복호화에 실패했습니다 (전자서명용)",

            // ServiceError PFX 인증서 추가
            3901: "전문 json이 형식에 맞지 않습니다",
            3902: "Pfx 인증서를 인증서로 변환하는데 실패했습니다",
            3903: "인증서 가져오기에 실패했습니다",

            // ServiceError UnmSetMatchedContext
            4001: "전문 json이 형식에 맞지 않습니다",
            4002: "Session 삭제에 실패했습니다",
            4003: "Session 가져오기에 실패했습니다",

            // ServiceError SetMatchedContext
            4101: "전문 json이 형식에 맞지 않습니다",
            4102: "Session 가져오기에 실패했습니다",
			4103: "Session 을 먼저 생성해 주세요",

            // ServiceError MakeCustomSession
            4201: "전문 json이 형식에 맞지 않습니다",
            4202: "인증서 가져오기에 실패했습니다",
            4203: "내부 암호화 저장에 실패했습니다",

            // ServiceError 발급
            4301: "전문 json이 형식에 맞지 않습니다",
            4302: "발급에 실패했습니다",
            4303: "개인키 암호화에 실패했습니다",
            4304: "인증서 가져오기에 실패했습니다",
            4305: "인증서 암호화에 실패했습니다 (키분배용)",
            4306: "빌링 데이터를 가져오는데 실패했습니다",

            // ServiceError 인증서 갱신
            4401: "전문 json이 형식에 맞지 않습니다",
            4402: "개인키 복호화에 실패했습니다",
            4403: "인증서 갱신에 실패했습니다",
            4404: "갱신된 인증서의 암호화에 실패했습니다",
            4405: "개인키 복호화에 실패했습니다 (키분배용)",
            4406: "개인키 암호화에 실패했습니다 (키분배용)",
            4407: "빌링 데이터를 가져오는데 실패했습니다",

            // ServiceError 인증서 폐기
            4501: "전문 json이 형식에 맞지 않습니다",
            4502: "개인키 복호화에 실패했습니다",
            4503: "인증서 폐기에 실패했습니다",
            4504: "개인키 복호화에 실패했습니다 (키분배용)",

            // ServiceError 인증서 내보내기
            4701: "전문 json이 형식에 맞지 않습니다",
            4702: "개인키 복호화에 실패했습니다",
            4703: "인증서 내보내기에 실패했습니다",
            4704: "개인키 복호화에 실패했습니다 (키분배용)",

            // cloudWeb
            5180: "인증서가 잠겼습니다",

            // ServiceError 인증서 중계 가져오기
            5201: "전문 json이 형식에 맞지 않습니다",
            5202: "중계 서버 연결에 실패했습니다",
            
            // ServiceError 인증서 중계 내보내기
            5301: "전문 json이 형식에 맞지 않습니다",
            5302: "인증서 복호화에 실패했습니다",
            5303: "중계서버 연결에 실패했습니다",
            5304: "PC 대 PC 간의 이동은 허용하지 않습니다",
            5305: "인증서 내보내기는 PC에서만 가능합니다.",

            // ServiceError UCPID
            5401: "전문이 UCPID json 형식에 맞지 않습니다",
            5402: "Dn과 매칭되는 인증서가 없습니다",
            5403: "UCPID 전자서명이 실패했습니다",

            // ServiceError UCPID
            5410: "EXE 파일이 실행되고 있지 않습니다",
            5411: "올바르지 않은 작업입니다",
            

            // 3 UtilError
            // UtilError Ajax
            6000: "Ajax 통신에 실패했습니다",

            // UtilError RelayConnectjs
            6020: "스마트폰에서 가져오기 도중 오류가 발생했습니다", // COMMON_ERROR_RELAY_CONNECT_ICRP_IMPORT1_FAILED
            6021: "스마트폰에서 가져오기 도중 오류가 발생했습니다", // COMMON_ERROR_RELAY_CONNECT_ICRP_IMPORT2_FAILED
            6022: "스마트폰에서 가져오기 도중 오류가 발생했습니다", // COMMON_ERROR_RELAY_CONNECT_ICRP_EXPORT1_FAILED
            6023: "스마트폰에서 가져오기 도중 오류가 발생했습니다", // COMMON_ERROR_RELAY_CONNECT_ICRP_EXPORT1_PC_TO_PC_NOT_ALLOWED


            // UtilError CheckComplexPassword.js
            6030: "패스워드에 영문자가 포함되어 있지 않습니다",
            6031: "패스워드에 숫자가 포함되어 있지 않습니다",
            6032: "패스워드에 특수문자가 포함되어 있지 않습니다",
            6033: "패스워드에 영문자만 입력되었습니다",
            6034: "패스워드에 숫자만 입력되어있습니다",
            6035: "패스워드에 특수문자만 입력되어있습니다",
            6036: "잘못된 특수문자가 입력되었습니다",
            6037: "올바르지 않은 패스워드 길이입니다(10자 이상 ~ 30자 이하)",
            6038: "같은 문자/숫자가 네자리 이상 연속되어 입력되었습니다",
            6039: "연속된 두자리의 문자/숫자가 3번 이상 반복되었습니다",
            6040: "연속된 세자리의 문자/숫자가 2번 이상 반복되었습니다",
            6041: "네자리의 연속된 문자/숫자가 입력되었습니다",
            6042: "거꾸로 연속되는 네자리의 문자/숫자가 입력되었습니다",

            // 4 StorageError
            // StorageError Error
            7000: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_SET_ITEM_FAILED
            7001: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_GET_ITEM_FAILED
            7002: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_REMOVE_ITEM_FAILED
            7003: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_GET_ITEM_FAILED_NO_VALUE
            7004: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_CLEAR_ITEM_FAILED
            7005: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_LOCAL_STORAGE_GET_ALL_KEY_FAILED
            7006: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_SECURITY_ERR
            7007: "로컬스로리지 사용 도중 오류가 발생했습니다", // STORAGE_ERROR_STORAGE_CAN_NOT_BE_USED


            // 5 Controller Error
            8000: "EXE가 실행되고 있지 않습니다",
            8001: "설치된 EXE 버전이 낮습니다",

            // 6 JSRoseInterface
            // JSRoseInterface Error
            9000: "잘못된 개인키 형식입니다",
            9001: "비밀번호가 틀렸습니다",
            9002: "잘못된 개인키 형식입니다",
            9003: "잘못된 인증서 형식입니다",
            9004: "Base64 인코딩에 실패했습니다",
            9005: "Base64 디코딩에 실패했습니다",
            9006: "비밀번호가 틀렸습니다", // JSROSE_INTERFACE_ERROR_PFX_TO_CERT_AND_KEY_FAILED
            9007: "서명에 실패했습니다", // PKCS7
            9008: "서명에 실패했습니다", // 원문없는 서명
            9009: "서명에 실패했습니다",  // PKCS1
            9010: "서명에 실패했습니다",  // 코스콤 서명
            9011: "서명에 실패했습니다",   // 축약 서명
            9012: "잘못된 원문형식입니다",
            9013: "잘못된 원문형식입니다",
            9014: "잘못된 원문형식입니다",
            9015: "발급에 실패했습니다",
            9016: "갱신에 실패했습니다",
            9017: "폐기에 실패했습니다",
            9018: "잘못된 인증서 형식입니다",
            9019: "전자봉투에 실패했습니다",
            9020: "Hex 인코딩에 실패했습니다",
            9021: "Hex 디코딩에 실패했습니다",


            // 7 NA 에러
            12029: "인증서를 가져오는데 실패했습니다",
            12030: "인증서를 가져오는데 실패했습니다",
            12031: "인증서를 가져오는데 실패했습니다",
            12032: "비밀번호가 틀렸습니다",
            12033: "인증서를 가져오는데 실패했습니다",
            12034: "인증서를 가져오는데 실패했습니다",
            12035: "비밀번호가 틀렸습니다",
            12036: "인증서를 가져오는데 실패했습니다",

            15600: "데이터 형식이 맞지 않습니다",
            15601: "선택이 취소되었습니다",
            15602: "잘못된 인증서 형식입니다",
            15603: "인증서를 찾는데 실패했습니다",
            15604: "비밀번호가 틀렸습니다",
            15605: "비밀번호가 틀렸습니다",
            15606: "전자봉투에 실패했습니다",
            15607: "PFX 암호화에 실패했습니다",
            15608: "잘못된 키 형식입니다",
            15609: "인증서 내보내기에 실패했습니다",

            15700: "데이터 형식이 맞지 않습니다",
            15701: "전자봉투 복호화에 실패했습니다",
            15702: "인증서 가져오기에 실패했습니다",
            15703: "비밀번호가 틀렸습니다",
            15704: "인증서 가져오기에 실패했습니다",
            15705: "인증서 가져오기에 실패했습니다",


            // 8 cloudWeb
            // cloudWeb 에러
            20000: "유효하지 않은 데이터입니다",
            20003: "데이터가 없습니다",
            20004: "데이터 형식이 맞지 않습니다",
            20010: "이름이 일치하지 않습니다 (동일한 휴대폰 번호와 생년월일 이름이 다른경우)",
            20100: "키 쌍 생성에 실패했습니다",
            20103: "비밀키 인코딩에 실패했습니다",
            20105: "공개키 인코딩에 실패했습니다",
            20106: "공개키 디코딩 실패에 실패했습니다",
            20107: "서명에 실패했습니다",
            20108: "PIN 암호화에 실패했습니다",
            20109: "PIN 번호가 틀렸습니다",
            20110: "PIN 추출에 실패했습니다",
            20111: "PIN 변경에 실패했습니다",
            20200: "SSL Connection에 실패했습니다",
            20350: "X509 인증서 데이터 생성에 실패했습니다",
            20351: "X509 인증서 정보 획득에 실패했습니다",
            20604: "같은 글자가 반복되었습니다",
            20605: "연속되는 글자가 3개 이상 있습니다",
            20703: "약관 동의에 미수락하셨습니다",
            20800: "API 키가 일치하지 않습니다",

            // cloudWeb dao 에러
            20900: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_INIT',
            20901: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_SET_USER_INFO',
            20902: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_GET_USER_INFO',
            20903: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_UPDATE_USER_INFO',
            20904: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_REMOVE_USER_INFO',
            20905: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_SET_CERT_INFO',
            20906: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_GET_CERT_INFO',
            20907: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_UPDATE_CERT_INFO',
            20908: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_REMOVE_CERT_INFO',
            20909: '브라우저 저장소 오류', //'CLOUD_CERT_ERROR_DAO_REMOVE_ALL_INFO',
            
            // cloudWeb ui 에러
            20920: '클라우드 연결 도중 오류가 발생했습니다',
            20921: 'MO 인증 도중 오류가 발생했습니다',
            20922: '클라우드 가입 도중 오류가 발생했습니다',
            
            // cloudWeb ui detail 에러
            20930: '취소하였습니다',
            20933: '취소하였습니다',
            20936: '취소하였습니다',
            
            // cloudWeb crypto 에러
            20940: '클라우드 인증서 추출에 실패했습니다',

            20950: '반복 사용 방지 작동중입니다. ' + CloudConfig.CONFIG.moRepeatDelayInterval / 1000 + '초 뒤 다시 이용해 주십시오.',
        }],

        [{
            3000: "English Not Supported",
        }],
        [{
            3000: "Japanese Not Supported",
        }],
        [{
            3000: "Chinese Not Supported",
        }],
    ];

    var brwoserLang = (function () {
        if (typeof (window.navigator.browserLanguage) === 'undefined')
            return window.navigator.language;
        return window.navigator.browserLanguage;
        // return 'ja-JP';
    })();


    var _config = CloudConfig;
    var errorCode = error.code;
    var errorMessage;

    if (_config.langIndex === undefined) {
        errorMessage = text[type[brwoserLang]][0][errorCode];
        return errorMessage === undefined ? error.message : errorMessage;
    }

    errorMessage = text[_config.langIndex][0][errorCode];
    return errorMessage === undefined ? error.message : errorMessage;
}