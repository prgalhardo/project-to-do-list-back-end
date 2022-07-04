"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const chai = __importStar(require("chai"));
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { expect } = chai;
describe('testing findAll method', () => {
    let chaiHttpResponse;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        sinon;
    }));
});
// import chaiHttp = require('chai-http');
// import { app } from '../app';
// import Match from '../database/models/matches';
// import Team from '../database/models/teams';
// import allMatches from './mocks/matchesMocks';
// import { Response } from 'superagent';
// chai.use(chaiHttp);
// const { expect } = chai;
// describe('Teste sobre o retorno de todas as partidas', () => {
//   let chaiHttpResponse: Response;
//   before(async () => {
//     sinon
//       .stub(Match, "findAll")
//       .resolves(allMatches as Match[]);
//   });
//   after(()=>{
//     (Match.findAll as sinon.SinonStub).restore();
//   })
//   it('Ao fazer o request todas as partidas retornam com status 200', async () => {
//     chaiHttpResponse = await chai
//        .request(app)
//        .get('/matches')
//        .send();
//       expect(chaiHttpResponse.status).to.be.equal(200);
//   });
//   it('Ao fazer o request todas as partidas retornam dentro de um array', async () => {
//     chaiHttpResponse = await chai
//        .request(app)
//        .get('/matches')
//        .send();
//       expect(chaiHttpResponse.body).to.be.an('array');
//   });
//   it('Ao fazer o request retornam 48 partidas dentro do array', async () => {
//     chaiHttpResponse = await chai
//        .request(app)
//        .get('/matches')
//        .send();
//       expect(chaiHttpResponse.body).to.be.lengthOf(48);
//   });
// });
