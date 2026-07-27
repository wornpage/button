//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes;
Array.from;
var o = Object.defineProperty, s = Object.getOwnPropertyDescriptor, c = Object.getOwnPropertyDescriptors, l = Object.prototype, u = Array.prototype, d = Object.getPrototypeOf, f = () => {};
function p(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function m() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/constants.js
var h = 1 << 24, g = 1024, _ = 2048, v = 4096, y = 8192, b = 16384, ee = 32768, te = 1 << 25, ne = 65536, re = 1 << 19, ie = 1 << 20, ae = 65536, oe = 1 << 21, se = 1 << 22, ce = 1 << 23, x = Symbol("$state"), le = Symbol("legacy props"), ue = Symbol(""), de = Symbol("attributes"), fe = Symbol("class"), pe = Symbol("style"), me = Symbol("form reset"), he = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ge = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function _e() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function ve() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ye(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function be() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Se() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ce() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function we(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Te() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var S = !1;
function Ee(e) {
	S = e;
}
var C;
function De(t) {
	if (t === null) throw we(), e;
	return C = t;
}
function Oe() {
	return De(/* @__PURE__ */ I(C));
}
function ke(t) {
	if (S) {
		if (/* @__PURE__ */ I(C) !== null) throw we(), e;
		C = t;
	}
}
function Ae(e = !0) {
	for (var t = 0, n = C;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ I(n);
		e && n.remove(), n = i;
	}
}
function je(t) {
	if (!t || t.nodeType !== 8) throw we(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Me(e) {
	return e === this.v;
}
function Ne(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Pe(e) {
	return !Ne(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var w = null;
function Fe(e) {
	w = e;
}
function Ie(e, t = !1, n) {
	w = {
		p: w,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: U,
		l: null
	};
}
function Le(e) {
	var t = w, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Yt(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, w = t.p, e ?? {};
}
function Re() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var ze = [];
function Be() {
	var e = ze;
	ze = [], p(e);
}
function Ve(e) {
	if (ze.length === 0 && !ht) {
		var t = ze;
		queueMicrotask(() => {
			t === ze && Be();
		});
	}
	ze.push(e);
}
function He(e) {
	var t = U;
	if (t === null) return B.f |= ce, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	Ue(e, t);
}
function Ue(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var We = ~(_ | v | g);
function T(e, t) {
	e.f = e.f & We | t;
}
function Ge(e) {
	e.f & 512 || e.deps === null ? T(e, g) : T(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ke(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ae, Ke(t.deps));
}
function qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ke(e.deps), T(e, g);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Je = !1;
function Ye(e) {
	var t = Je;
	try {
		return Je = !1, [e(), Je];
	} finally {
		Je = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function Xe(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, Ve(() => {
			document.activeElement === t && e.focus();
		});
	}
}
var Ze = !1;
function Qe() {
	Ze || (Ze = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[me]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function $e(e) {
	var t = B, n = U;
	H(null), W(null);
	try {
		return e();
	} finally {
		H(t), W(n);
	}
}
ne | re;
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function et(e, t, n, r) {
	let i = Re() ? it : st;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = U, c = tt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				Ue(e, s);
			}
			nt();
		}
	}
	var d = rt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ot(e))).then(u).catch((e) => Ue(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), nt();
	}) : f();
}
function tt() {
	var e = U, t = B, n = w, r = D;
	return function(i = !0) {
		W(e), H(t), Fe(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function nt(e = !0) {
	W(null), H(null), Fe(null), e && D?.deactivate();
}
function rt() {
	var e = U, t = e.b, n = D, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function it(e) {
	var n = 2 | _;
	return U !== null && (U.f |= re), {
		ctx: w,
		deps: null,
		effects: null,
		equals: Me,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: U,
		ac: null
	};
}
var at = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ot(e, n, r) {
	let i = U;
	i === null && _e();
	var a = void 0, o = At(t), s = !B, c = /* @__PURE__ */ new Set();
	return Zt(() => {
		var t = U, n = m();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== he && n.reject(e);
			}).finally(nt);
		} catch (e) {
			n.reject(e), nt();
		}
		var r = D;
		if (s) {
			if (t.f & 32768) var l = rt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(at);
			else for (let e of c.values()) e.reject(at);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== at && (r.activate(), t ? (o.f |= ce, jt(o, t)) : (o.f & 8388608 && (o.f ^= ce), jt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), Jt(() => {
		for (let e of c) e.reject(at);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function st(e) {
	let t = /* @__PURE__ */ it(e);
	return t.equals = Pe, t;
}
function ct(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) R(t[n]);
	}
}
function lt(e) {
	var n, r = U, i = e.parent;
	if (!z && i !== null && e.v !== t && i.f & 24576) return Ce(), e.v;
	W(i);
	try {
		e.f &= ~ae, ct(e), n = Sn(e);
	} finally {
		W(r);
	}
	return n;
}
function ut(e) {
	var t = lt(e);
	if (!e.equals(t) && (e.wv = yn(), (!D?.is_fork || e.deps === null) && (D === null ? e.v = t : (D.capture(e, t, !0), pt?.capture(e, t, !0)), e.deps === null))) {
		T(e, g);
		return;
	}
	z || (O === null ? Ge(e) : (qt() || D?.is_fork) && O.set(e, t));
}
function dt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && $e(() => {
		t.ac.abort(he), t.ac = null;
	}), t.fn !== null && (t.teardown = f), wn(t, 0), nn(t));
}
function ft(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Z(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var E = null, D = null, pt = null, O = null, mt = null, ht = !1, gt = !1, k = null, _t = null, vt = 0, yt = 1, bt = class e {
	id = yt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		E === null ? E = this : (E.#n = this, this.#t = E), E = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) T(r, _), t(r);
			for (r of n.m) T(r, v), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, vt++ > 1e3 && (this.#x(), xt());
		for (let e of this.#u) this.#d.delete(e), T(e, _), this.schedule(e);
		for (let e of this.#d) T(e, v), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = k = [], r = [], i = _t = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Dt(e), this.#h() || this.discard(), t;
		}
		if (D = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (k = null, _t = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) Et(e, t);
			i.length > 0 && D.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), pt = this, St(r), St(n), pt = null, this.#s?.resolve();
		var s = D;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= g;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= g : i & 4 ? t.push(r) : bn(r) && (i & 16 && this.#d.add(r), Z(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), T(i, _), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), D = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) qe(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), O?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		D = this;
	}
	deactivate() {
		D = null, O = null;
	}
	flush() {
		try {
			gt = !0, D = this, this.#g();
		} finally {
			vt = 0, mt = null, k = null, _t = null, gt = !1, D = null, O = null, j.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(at);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, Ve(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= m()).promise;
	}
	static ensure() {
		if (D === null) {
			let t = D = new e();
			!gt && Ve(() => {
				t.#e || t.flush();
			});
		}
		return D;
	}
	apply() {
		O = null;
	}
	schedule(e) {
		if (mt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (k !== null && t === U && (B === null || !(B.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= g;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? E = e : t.#t = e, this.linked = !1;
		}
	}
};
function xt() {
	try {
		ve();
	} catch (e) {
		Ue(e, mt);
	}
}
var A = null;
function St(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && bn(r) && (A = /* @__PURE__ */ new Set(), Z(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && on(r), A?.size > 0)) {
				j.clear();
				for (let e of A) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) A.has(n) && (A.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Z(n);
					}
				}
				A.clear();
			}
		}
		A = null;
	}
}
function Ct(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? Ct(i, t, n, r) : e & 4194320 && !(e & 2048) && wt(i, t, r) && (T(i, _), Tt(i));
	}
}
function wt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (a.call(t, r)) return !0;
		if (r.f & 2 && wt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Tt(e) {
	D.schedule(e);
}
function Et(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), T(e, g);
		for (var n = e.first; n !== null;) Et(n, t), n = n.next;
	}
}
function Dt(e) {
	T(e, g);
	for (var t = e.first; t !== null;) Dt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Ot = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Map(), kt = !1;
function At(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Me,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function M(e, t) {
	let n = At(e, t);
	return hn(n), n;
}
function N(e, t, n = !1) {
	return B !== null && (!V || B.f & 131072) && Re() && B.f & 4325394 && (G === null || !G.has(e)) && Se(), jt(e, n ? P(t) : t, _t);
}
function jt(e, t, n = null) {
	if (!e.equals(t)) {
		j.set(e, z ? t : e.v);
		var r = bt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && lt(t), O === null && Ge(t);
		}
		e.wv = yn(), Pt(e, _, n), Re() && U !== null && U.f & 1024 && !(U.f & 96) && (J === null ? gn([e]) : J.push(e)), !r.is_fork && Ot.size > 0 && !kt && Mt();
	}
	return t;
}
function Mt() {
	kt = !1;
	for (let e of Ot) {
		e.f & 1024 && T(e, v);
		let t;
		try {
			t = bn(e);
		} catch {
			t = !0;
		}
		t && Z(e);
	}
	Ot.clear();
}
function Nt(e) {
	N(e, e.v + 1);
}
function Pt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Re(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === U)) {
			var l = (c & _) === 0;
			if (l && T(s, t), c & 131072) Ot.add(s);
			else if (c & 2) {
				var u = s;
				O?.delete(u), c & 65536 || (c & 512 && (U === null || !(U.f & 2097152)) && (s.f |= ae), Pt(u, v, n));
			} else if (l) {
				var d = s;
				c & 16 && A !== null && A.add(d), n === null ? Tt(d) : n.push(d);
			}
		}
	}
}
function P(e) {
	if (typeof e != "object" || !e || x in e) return e;
	let n = d(e);
	if (n !== l && n !== u) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ M(0), c = null, f = X, p = (e) => {
		if (X === f) return e();
		var t = B, n = X;
		H(null), vn(f);
		var r = e();
		return H(t), vn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ M(e.length, c)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && be();
			var r = i.get(t);
			return r === void 0 ? p(() => {
				var e = /* @__PURE__ */ M(n.value, c);
				return i.set(t, e), e;
			}) : N(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = p(() => /* @__PURE__ */ M(t, c));
					i.set(n, e), Nt(o);
				}
			} else N(r, t), Nt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === x) return e;
			var o = i.get(r), l = r in n;
			if (o === void 0 && (!l || s(n, r)?.writable) && (o = p(() => /* @__PURE__ */ M(P(l ? n[r] : t), c)), i.set(r, o)), o !== void 0) {
				var u = Q(o);
				return u === t ? void 0 : u;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Q(a));
			} else if (r === void 0) {
				var o = i.get(n), s = o?.v;
				if (o !== void 0 && s !== t) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return r;
		},
		has(e, n) {
			if (n === x) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || U !== null && (!a || s(e, n)?.writable)) && (r === void 0 && (r = p(() => /* @__PURE__ */ M(a ? P(e[n]) : t, c)), i.set(n, r)), Q(r) === t) ? !1 : a;
		},
		set(e, n, r, l) {
			var u = i.get(n), d = n in e;
			if (a && n === "length") for (var f = r; f < u.v; f += 1) {
				var m = i.get(f + "");
				m === void 0 ? f in e && (m = p(() => /* @__PURE__ */ M(t, c)), i.set(f + "", m)) : N(m, t);
			}
			if (u === void 0) (!d || s(e, n)?.writable) && (u = p(() => /* @__PURE__ */ M(void 0, c)), N(u, P(r)), i.set(n, u));
			else {
				d = u.v !== t;
				var h = p(() => P(r));
				N(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(l, r), !d) {
				if (a && typeof n == "string") {
					var _ = i.get("length"), v = Number(n);
					Number.isInteger(v) && v >= _.v && N(_, v + 1);
				}
				Nt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Q(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			xe();
		}
	});
}
function Ft(e) {
	try {
		if (typeof e == "object" && e && x in e) return e[x];
	} catch {}
	return e;
}
function It(e, t) {
	return Object.is(Ft(e), Ft(t));
}
var Lt, Rt, zt;
function F(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Bt(e) {
	return Rt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
	return zt.call(e);
}
function Vt(e, t) {
	if (!S) return /* @__PURE__ */ Bt(e);
	var n = /* @__PURE__ */ Bt(C);
	if (n === null) n = C.appendChild(F());
	else if (t && n.nodeType !== 3) {
		var r = F();
		return n?.before(r), De(r), r;
	}
	return t && Gt(n), De(n), n;
}
function Ht(e, t = !1) {
	if (!S) {
		var n = /* @__PURE__ */ Bt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ I(n) : n;
	}
	if (t) {
		if (C?.nodeType !== 3) {
			var r = F();
			return C?.before(r), De(r), r;
		}
		Gt(C);
	}
	return C;
}
function Ut() {
	return !1;
}
function Wt(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Gt(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Kt(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function L(e, t) {
	var n = U;
	n !== null && n.f & 8192 && (e |= y);
	var r = {
		ctx: w,
		deps: null,
		nodes: null,
		f: e | _ | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	D?.register_created_effect(r);
	var i = r;
	if (e & 4) k === null ? bt.ensure().schedule(r) : k.push(r);
	else if (t !== null) {
		try {
			Z(r);
		} catch (e) {
			throw R(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ne));
	}
	if (i !== null && (i.parent = n, n !== null && Kt(i, n), B !== null && B.f & 2 && !(e & 64))) {
		var a = B;
		(a.effects ??= []).push(i);
	}
	return r;
}
function qt() {
	return B !== null && !V;
}
function Jt(e) {
	let t = L(8, null);
	return T(t, g), t.teardown = e, t;
}
function Yt(e) {
	return L(4 | ie, e);
}
function Xt(e) {
	return L(4, e);
}
function Zt(e) {
	return L(se | re, e);
}
function Qt(e, t = 0) {
	return L(16 | t, e);
}
function $t(e, t = 0) {
	return L(h | t, e);
}
function en(e) {
	return L(32 | re, e);
}
function tn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = z, n = B;
		mn(!0), H(null);
		try {
			t.call(null);
		} finally {
			mn(e), H(n);
		}
	}
}
function nn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && $e(() => {
			e.abort(he);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : R(n, t), n = r;
	}
}
function rn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || R(t), t = n;
	}
}
function R(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (an(e.nodes.start, e.nodes.end), n = !0), e.f |= te, nn(e, t && !n), wn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	tn(e), e.f ^= te, e.f |= b;
	var i = e.parent;
	i !== null && i.first !== null && on(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function an(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ I(e);
		e.remove(), e = n;
	}
}
function on(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function sn(e, t, n = !0) {
	var r = [];
	cn(e, r, !0);
	var i = () => {
		n && R(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function cn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= y;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				cn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function ln(e) {
	un(e, !0);
}
function un(e, t) {
	if (e.f & 8192) {
		e.f ^= y, e.f & 1024 || (T(e, _), bt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			un(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function dn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ I(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var fn = null, pn = !1, z = !1;
function mn(e) {
	z = e;
}
var B = null, V = !1;
function H(e) {
	B = e;
}
var U = null;
function W(e) {
	U = e;
}
var G = null;
function hn(e) {
	B !== null && (G ??= /* @__PURE__ */ new Set()).add(e);
}
var K = null, q = 0, J = null;
function gn(e) {
	J = e;
}
var _n = 1, Y = 0, X = Y;
function vn(e) {
	X = e;
}
function yn() {
	return ++_n;
}
function bn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ae), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (bn(a) && ut(a), a.wv > e.wv) return !0;
		}
		t & 512 && O === null && T(e, g);
	}
	return !1;
}
function xn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(G !== null && G.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? xn(a, t, !1) : t === a && (n ? T(a, _) : a.f & 1024 && T(a, v), Tt(a));
	}
}
function Sn(e) {
	var t = K, n = q, r = J, i = B, a = G, o = w, s = V, c = X, l = e.f;
	K = null, q = 0, J = null, B = l & 96 ? null : e, G = null, Fe(e.ctx), V = !1, X = ++Y, e.ac !== null && ($e(() => {
		e.ac.abort(he);
	}), e.ac = null);
	try {
		e.f |= oe;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = e.deps, p = D?.is_fork;
		if (K !== null) {
			var m;
			if (p || wn(e, q), f !== null && q > 0) for (f.length = q + K.length, m = 0; m < K.length; m++) f[q + m] = K[m];
			else e.deps = f = K;
			if (qt() && e.f & 512) for (m = q; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && q < f.length && (wn(e, q), f.length = q);
		if (Re() && J !== null && !V && f !== null && !(e.f & 6146)) for (m = 0; m < J.length; m++) xn(J[m], e);
		if (i !== null && i !== e) {
			if (Y++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Y;
			if (t !== null) for (let e of t) e.rv = Y;
			J !== null && (r === null ? r = J : r.push(...J));
		}
		return e.f & 8388608 && (e.f ^= ce), d;
	} catch (e) {
		return He(e);
	} finally {
		e.f ^= oe, K = t, q = n, J = r, B = i, G = a, Fe(o), V = s, X = c;
	}
}
function Cn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (K === null || !a.call(K, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ae), c.v !== t && Ge(c), c.ac !== null && $e(() => {
			c.ac.abort(he), c.ac = null, T(c, _);
		}), dt(c), wn(c, 0);
	}
}
function wn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Cn(e, n[r]);
}
function Z(e) {
	var t = e.f;
	if (!(t & 16384)) {
		T(e, g);
		var n = U, r = pn;
		U = e, pn = (t & 96) == 0;
		try {
			t & 16777232 ? rn(e) : nn(e), tn(e);
			var i = Sn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = _n;
		} finally {
			pn = r, U = n;
		}
	}
}
function Q(e) {
	var t = (e.f & 2) != 0;
	if (fn?.add(e), B !== null && !V && !(U !== null && U.f & 16384) && (G === null || !G.has(e))) {
		var n = B.deps;
		if (B.f & 2097152) e.rv < Y && (e.rv = Y, K === null && n !== null && n[q] === e ? q++ : K === null ? K = [e] : K.push(e));
		else {
			B.deps ??= [], a.call(B.deps, e) || B.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [B] : a.call(r, B) || r.push(B);
		}
	}
	if (z && j.has(e)) return j.get(e);
	if (t) {
		var i = e;
		if (z) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || En(i)) && (o = lt(i)), j.set(i, o), o;
		}
		var s = (i.f & 512) == 0 && !V && B !== null && (pn || (B.f & 512) != 0), c = (i.f & ee) === 0;
		bn(i) && (s && (i.f |= 512), ut(i)), s && !c && (ft(i), Tn(i));
	}
	if (O?.has(e)) return O.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Tn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ft(t), Tn(t));
}
function En(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (j.has(t) || t.f & 2 && En(t)) return !0;
	return !1;
}
function Dn(e) {
	var t = V;
	try {
		return V = !0, e();
	} finally {
		V = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var On = Symbol("events"), kn = /* @__PURE__ */ new Set(), An = /* @__PURE__ */ new Set();
function jn(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || Fn.call(t, e), !e.cancelBubble) return $e(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ve(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Mn(e, t, n) {
	(t[On] ??= {})[e] = n;
}
function Nn(e) {
	for (var t = 0; t < e.length; t++) kn.add(e[t]);
	for (var n of An) n(e);
}
var Pn = null;
function Fn(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	Pn = e;
	var s = 0, c = Pn === e && e[On];
	if (c) {
		var l = i.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[On] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (a = i[s] || e.target, a !== t) {
		o(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = B, f = U;
		H(null), W(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[On]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				s++, a = s < i.length ? i[s] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[On] = t, delete e.currentTarget, H(d), W(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var In = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ln(e) {
	return In?.createHTML(e) ?? e;
}
function Rn(e) {
	var t = Wt("template");
	return t.innerHTML = Ln(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function zn(e, t) {
	var n = U;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Bn(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (S) return zn(C, null), C;
		i === void 0 && (i = Rn(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Bt(i)));
		var t = r || Lt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Bt(t), s = t.lastChild;
			zn(o, s);
		} else zn(t, t);
		return t;
	};
}
function Vn() {
	if (S) return zn(C, null), C;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = F();
	return e.append(t, n), zn(t, n), e;
}
function Hn(e, t) {
	if (S) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = C), Oe();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function Un(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var Wn = [
	"beforeinput",
	"click",
	"change",
	"dblclick",
	"contextmenu",
	"focusin",
	"focusout",
	"input",
	"keydown",
	"keyup",
	"mousedown",
	"mousemove",
	"mouseout",
	"mouseover",
	"mouseup",
	"pointerdown",
	"pointermove",
	"pointerout",
	"pointerover",
	"pointerup",
	"touchend",
	"touchmove",
	"touchstart"
];
function Gn(e) {
	return Wn.includes(e);
}
var Kn = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), qn = {
	formnovalidate: "formNoValidate",
	ismap: "isMap",
	nomodule: "noModule",
	playsinline: "playsInline",
	readonly: "readOnly",
	defaultvalue: "defaultValue",
	defaultchecked: "defaultChecked",
	srcobject: "srcObject",
	novalidate: "noValidate",
	allowfullscreen: "allowFullscreen",
	disablepictureinpicture: "disablePictureInPicture",
	disableremoteplayback: "disableRemotePlayback"
};
function Jn(e) {
	return e = e.toLowerCase(), qn[e] ?? e;
}
[...Kn];
var Yn = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) ln(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (ln(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (R(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						dn(r, t), t.append(F()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else R(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), sn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (R(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = D, r = Ut();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = F();
			i.append(a), this.#n.set(e, {
				effect: en(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, en(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else S && (this.anchor = C), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function Xn(e, t, ...n) {
	var r = new Yn(e);
	Qt(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ne);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Zn(e, t, n = !1) {
	var r;
	S && (r = C, Oe());
	var i = new Yn(e), a = n ? ne : 0;
	function o(e, t) {
		if (S) {
			var n = je(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Ae();
				De(a), i.anchor = a, Ee(!1), i.ensure(e, t), Ee(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	Qt(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Qn(e, t) {
	var n = void 0, r;
	$t(() => {
		n !== (n = t()) && (r &&= (R(r), null), n && (r = en(() => {
			Xt(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function $n(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = $n(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function er() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = $n(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function tr(e) {
	return typeof e == "object" ? er(e) : e ?? "";
}
var nr = [..." 	\n\r\f\xA0\v﻿"];
function rr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || nr.includes(r[o - 1])) && (s === r.length || nr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function ir(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function ar(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function or(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(ar)), i && c.push(...Object.keys(i).map(ar));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = ar(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += ir(r)), i && (n += ir(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function sr(e, t, n, r, i, a) {
	var o = e[fe];
	if (S || o !== n || o === void 0) {
		var s = rr(n, r, a);
		(!S || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[fe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function cr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function lr(e, t, n, r) {
	var i = e[pe];
	if (S || i !== t) {
		var a = or(t, r);
		(!S || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[pe] = t;
	} else r && (Array.isArray(r) ? (cr(e, n?.[0], r[0]), cr(e, n?.[1], r[1], "important")) : cr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function ur(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!r(t)) return Te();
		for (var i of e.options) i.selected = t.includes(fr(i));
		return;
	}
	for (i of e.options) if (It(fr(i), t)) {
		i.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function dr(e) {
	var t = new MutationObserver(() => {
		"__value" in e && ur(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), Jt(() => {
		t.disconnect();
	});
}
function fr(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var $ = Symbol("class"), pr = Symbol("style"), mr = Symbol("is custom element"), hr = Symbol("is html"), gr = ge ? "link" : "LINK", _r = ge ? "input" : "INPUT", vr = ge ? "option" : "OPTION", yr = ge ? "select" : "SELECT";
function br(e) {
	if (S) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Sr(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Sr(e, "checked", null), e.checked = r;
				}
			}
		};
		e[me] = n, Ve(n), Qe();
	}
}
function xr(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Sr(e, t, n, r) {
	var i = Tr(e);
	S && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === gr) || i[t] !== (i[t] = n) && (t === "loading" && (e[ue] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Dr(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Cr(e, n, r, i, a = !1, o = !1) {
	if (S && a && e.nodeName === _r) {
		var s = e;
		(s.type === "checkbox" ? "defaultChecked" : "defaultValue") in r || br(s);
	}
	var c = Tr(e), l = c[mr], u = !c[hr];
	let d = S && l;
	d && Ee(!1);
	var f = n || {}, p = e.nodeName === vr;
	for (var m in n) m in r || (r[m] = null);
	r.class ? r.class = tr(r.class) : (i || r[$]) && (r.class = null), r[pr] && (r.style ??= null);
	var h = Dr(e);
	if (e.nodeName === _r && "type" in r && ("value" in r || "__value" in r)) {
		var g = r.type;
		(g !== f.type || g === void 0 && e.hasAttribute("type")) && (f.type = g, Sr(e, "type", g, o));
	}
	for (let a in r) {
		let s = r[a];
		if (p && a === "value" && s == null) {
			e.value = e.__value = "", f[a] = s;
			continue;
		}
		if (a === "class") {
			sr(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", s, i, n?.[$], r[$]), f[a] = s, f[$] = r[$];
			continue;
		}
		if (a === "style") {
			lr(e, s, n?.[pr], r[pr]), f[a] = s, f[pr] = r[pr];
			continue;
		}
		var _ = f[a];
		if (!(s === _ && !(s === void 0 && e.hasAttribute(a)))) {
			f[a] = s;
			var v = a[0] + a[1];
			if (v !== "$$") if (v === "on") {
				let t = {}, n = "$$" + a, r = a.slice(2);
				var y = Gn(r);
				if (Un(r) && (r = r.slice(0, -7), t.capture = !0), !y && _) {
					if (s != null) continue;
					e.removeEventListener(r, f[n], t), f[n] = null;
				}
				if (y) Mn(r, e, s), Nn([r]);
				else if (s != null) {
					function i(e) {
						f[a].call(this, e);
					}
					f[n] = jn(r, e, i, t);
				}
			} else if (a === "style") Sr(e, a, s);
			else if (a === "autofocus") Xe(e, !!s);
			else if (!l && (a === "__value" || a === "value" && s != null)) e.value = e.__value = s;
			else if (a === "selected" && p) xr(e, s);
			else {
				var b = a;
				u || (b = Jn(b));
				var ee = b === "defaultValue" || b === "defaultChecked";
				if (s == null && !l && !ee) if (c[a] = null, b === "value" || b === "checked") {
					let t = e, r = n === void 0;
					if (b === "value") {
						let e = t.defaultValue;
						t.removeAttribute(b), t.defaultValue = e, t.value = t.__value = r ? e : null;
					} else {
						let e = t.defaultChecked;
						t.removeAttribute(b), t.defaultChecked = e, t.checked = r ? e : !1;
					}
				} else e.removeAttribute(a);
				else ee || h.includes(b) && (l || typeof s != "string") ? (e[b] = s, b in c && (c[b] = t)) : typeof s != "function" && Sr(e, b, s, o);
			}
		}
	}
	return d && Ee(!0), f;
}
function wr(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	et(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === yr, l = !1;
		if ($t(() => {
			var u = t(...n.map(Q)), d = Cr(e, r, u, a, o, s);
			l && c && "value" in u && ur(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || R(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && R(i[t]), i[t] = en(() => Qn(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			Xt(() => {
				ur(u, r.value, !0), dr(u);
			});
		}
		l = !0;
	});
}
function Tr(e) {
	return e[de] ??= {
		[mr]: e.nodeName.includes("-"),
		[hr]: e.namespaceURI === n
	};
}
var Er = /* @__PURE__ */ new Map();
function Dr(e) {
	var t = e.getAttribute("is") || e.nodeName, n = Er.get(t);
	if (n) return n;
	Er.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = c(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = d(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var Or = {
	get(e, t) {
		if (!e.exclude.has(t)) return e.props[t];
	},
	set(e, t) {
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.has(t) && t in e.props) return {
			enumerable: !0,
			configurable: !0,
			value: e.props[t]
		};
	},
	has(e, t) {
		return !e.exclude.has(t) && t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.has(t));
	}
};
/*#__NO_SIDE_EFFECTS__*/
function kr(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, Or);
}
function Ar(e, t, n, r) {
	var i = !0, a = (n & 8) != 0, o = (n & 16) != 0, c = r, l = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ it(r), Q(u)) : (l && (l = !1, c = o ? Dn(r) : r), c);
	let f;
	if (a) {
		var p = x in e || le in e;
		f = s(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = Ye(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && ye(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (c = void 0), n === void 0 ? c : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? it : st)(() => (v = !1, g()));
	a && Q(y);
	var b = U;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Q(y) : i && a ? P(e) : e;
			return N(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return z && v || b.f & 16384 ? y.v : Q(y);
	});
}
var jr = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"variant",
	"disabled",
	"size",
	"type",
	"href",
	"onclick",
	"children"
]), Mr = /* @__PURE__ */ Bn("<a><!></a>"), Nr = /* @__PURE__ */ Bn("<button><!></button>");
function Pr(e, t) {
	Ie(t, !0);
	let n = Ar(t, "variant", 3, "default"), r = Ar(t, "disabled", 3, !1), i = Ar(t, "size", 3, "md"), a = Ar(t, "type", 3, "button"), o = /* @__PURE__ */ kr(t, jr);
	var s = Vn(), c = Ht(s), l = (e) => {
		var a = Mr(), s = (e) => {
			if (r()) {
				e.preventDefault();
				return;
			}
			t.onclick?.(e);
		};
		wr(a, () => ({
			href: t.href,
			...o,
			class: "worn-btn",
			"aria-disabled": r() || void 0,
			tabindex: r() ? -1 : void 0,
			onclick: s,
			[$]: {
				"is-primary": n() === "primary",
				"is-danger": n() === "danger",
				"is-warning": n() === "warning",
				"is-sm": i() === "sm"
			}
		}), void 0, void 0, void 0, "svelte-1a7eo45"), Xn(Vt(a), () => t.children ?? f), ke(a), Hn(e, a);
	}, u = (e) => {
		var s = Nr();
		wr(s, () => ({
			type: a(),
			...o,
			class: "worn-btn",
			disabled: r(),
			onclick: t.onclick,
			[$]: {
				"is-primary": n() === "primary",
				"is-danger": n() === "danger",
				"is-warning": n() === "warning",
				"is-sm": i() === "sm"
			}
		}), void 0, void 0, void 0, "svelte-1a7eo45"), Xn(Vt(s), () => t.children ?? f), ke(s), Hn(e, s);
	};
	Zn(c, (e) => {
		t.href ? e(l) : e(u, -1);
	}), Hn(e, s), Le();
}
//#endregion
export { Pr as Button };
