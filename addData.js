const axios = require("axios");

const datas = {
	addresses: [
		{
			id: 12382726352,
			postnumber: 203928,
			name: '홍길동',
			address: '서울시 강남구 강남대로 364, 11층',
		},
		{
			id: 12382726390,
			postnumber: 233958,
			name: '고길동',
			address: '서울시 강남구 가양대로 32, 가양아파트 21동 201호',
		},
		{
			id: 12382726393,
			postnumber: 243929,
			name: '이영신',
			address: '서울시 서초구 서초대로 311, 20층',
		},
		{
			id: 12382726493,
			postnumber: 303297,
			name: '이신영',
			address: '충청북도 강화군 양수리 223, 양수빌딩 9층',
		},
		{
			id: 12382726423,
			postnumber: 309126,
			name: '고신영',
			address: '인천시 강화군 양수리 213, 가양아파트 21동 201호',
		},
		{
			id: 12382726523,
			postnumber: 103235,
			name: '신동식',
			address: '군산시 화현군 수렴리 1223, 수렴빌팅 11층',
		},
		{
			id: 12382726535,
			postnumber: 603224,
			name: '허신영',
			address: '부산시 서면 가덕대로 23, 가덕아파트 8층',
		},
		{
			id: 12382726621,
			postnumber: 229313,
			name: 'Robert Kim',
			address: '군산시 강화군 양수리 101, 양수빌딩 12층',
		},
		{
			id: 12382726643,
			postnumber: 249281,
			name: '김하늘',
			address: '인천시 강화군 수렴리 223, 가양아파트 21동 201호',
		},
		{
			id: 12382726669,
			postnumber: 558348,
			name: '김우주',
			address: '인천시 강화군 양수리 112, 양수빌딩 9층',
		},
		{
			id: 12382726670,
			postnumber: 156346,
			name: '최태영',
			address: '경기도 고양시 고사리 223, 양수빌딩 9층',
		},
		{
			id: 12382726683,
			postnumber: 575645,
			name: '장두식',
			address: '인천시 강화군 양수리 22, 가양아파트 21동 201호',
		},
		{
			id: 12382726684,
			postnumber: 422344,
			name: '양판출',
			address: '경기도 강화군 고사리 101, 양수빌딩 9층',
		},
		{
			id: 12382726693,
			postnumber: 276761,
			name: '염하진',
			address: '충주시 강화군 양수리 112, 수리빌딩 19층',
		},
		{
			id: 12382726703,
			postnumber: 353630,
			name: '이하늘',
			address: '인천시 강화군 양수리 223, 가양아파트 21동 201호',
		},
		{
			id: 12382726722,
			postnumber: 234422,
			name: '박하늘',
			address: '경기도 고양시 고사리 101, 양수빌딩 9층',
		},
		{
			id: 12382726731,
			postnumber: 112355,
			name: '손예쁨',
			address: '인천시 강화군 양수리 223, 양수빌딩 9층',
		},
		{
			id: 12382726813,
			postnumber: 264578,
			name: '강주희',
			address: '충주시 수양리 3401, 양수빌딩 9층',
		},
		{
			id: 12382726834,
			postnumber: 734673,
			name: '최식',
			address: '인천시 강화군 양수리 223, 양가아파트 2동 301호',
		},
		{
			id: 12382726862,
			postnumber: 375440,
			name: '강누리',
			address: '인천시 강화군 고양리 223, 양수빌딩 9층',
		},
		{
			id: 12382726871,
			postnumber: 234251,
			name: '양하진',
			address: '경기도 고양시 고사리 22, 양수빌딩 9층',
		},
		{
			id: 12382727043,
			postnumber: 732255,
			name: '김두석',
			address: '인천시 중구 수요대로 223, 계양아파트 501동 23호',
		},
		{
			id: 12382727052,
			postnumber: 946466,
			name: '고명진',
			address: '인천시 검단면 효정동 112, 수빌딩 19층',
		},
		{
			id: 12382727071,
			postnumber: 332574,
			name: '양수현',
			address: '경기도 고양시 고사리 223, 장수빌라 302호',
		},
		{
			id: 12382727082,
			postnumber: 132789,
			name: '최고은',
			address: '인천시 중구 주안대로 112, 정수빌딩 11층',
		},
	],
	default: 12382726390,
};


const REACT_APP_API_PATH = 'https://teamback.geoniljang.com';


(async () => {
	const _setDefault = async (datas) => {
		return datas.map(data => {
			data.default = false;
			delete data.id;
			return data
		})
	}

	const setData = await _setDefault(datas.addresses);
	setData.forEach(address => {
		axios.post(`${REACT_APP_API_PATH}/address/`, address, {});
	})
})();