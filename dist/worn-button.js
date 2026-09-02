//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {}, t = Symbol("uninitialized"), n = "http://www.w3.org/1999/xhtml", r = Array.isArray, i = Array.prototype.indexOf, a = Array.prototype.includes, o = Array.from, s = Object.keys, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyDescriptors, d = Object.prototype, f = Array.prototype, p = Object.getPrototypeOf, m = Object.isExtensible, h = () => {};
function g(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ee() {
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
var _ = 1 << 24, v = 1024, y = 2048, b = 4096, te = 8192, ne = 16384, re = 32768, ie = 1 << 25, ae = 65536, oe = 1 << 19, se = 1 << 20, ce = 65536, le = 1 << 21, ue = 1 << 22, de = 1 << 23, fe = Symbol("$state"), pe = Symbol("legacy props"), me = Symbol(""), he = Symbol("attributes"), ge = Symbol("class"), _e = Symbol("style"), ve = Symbol("text"), ye = Symbol("form reset"), be = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), xe = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Se() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Ce() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function we() {
	throw Error("https://svelte.dev/e/hydration_failed");
}
function Te(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ee() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function De() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ke() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ae() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function je(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Me() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ne() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var x = !1;
function S(e) {
	x = e;
}
var C;
function w(t) {
	if (t === null) throw je(), e;
	return C = t;
}
function Pe() {
	return w(/* @__PURE__ */ L(C));
}
function Fe(t) {
	if (x) {
		if (/* @__PURE__ */ L(C) !== null) throw je(), e;
		C = t;
	}
}
function Ie(e = 1) {
	if (x) {
		for (var t = e, n = C; t--;) n = /* @__PURE__ */ L(n);
		C = n;
	}
}
function Le(e = !0) {
	for (var t = 0, n = C;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ L(n);
		e && n.remove(), n = i;
	}
}
function Re(t) {
	if (!t || t.nodeType !== 8) throw je(), e;
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function ze(e) {
	return e === this.v;
}
function Be(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ve(e) {
	return !Be(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var T = null;
function He(e) {
	T = e;
}
function Ue(e, t = !1, n) {
	T = {
		p: T,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: G,
		l: null
	};
}
function We(e) {
	var t = T, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) mn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, T = t.p, e ?? {};
}
function Ge() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ke = [];
function qe() {
	var e = Ke;
	Ke = [], g(e);
}
function E(e) {
	if (Ke.length === 0 && !Dt) {
		var t = Ke;
		queueMicrotask(() => {
			t === Ke && qe();
		});
	}
	Ke.push(e);
}
function Je() {
	for (; Ke.length > 0;) qe();
}
function Ye(e) {
	var t = G;
	if (t === null) return H.f |= de, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	D(e, t);
}
function D(e, t) {
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
var Xe = ~(y | b | v);
function O(e, t) {
	e.f = e.f & Xe | t;
}
function Ze(e) {
	e.f & 512 || e.deps === null ? O(e, v) : O(e, b);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Qe(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= ce, Qe(t.deps));
}
function $e(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Qe(e.deps), O(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var et = !1;
function tt(e) {
	var t = et;
	try {
		return et = !1, [e(), et];
	} finally {
		et = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function nt(e, t) {
	if (t) {
		let t = document.body;
		e.autofocus = !0, E(() => {
			document.activeElement === t && e.focus();
		});
	}
}
var rt = !1;
function it() {
	rt || (rt = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ye]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function at(e) {
	var t = H, n = G;
	W(null), K(null);
	try {
		return e();
	} finally {
		W(t), K(n);
	}
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function ot(e) {
	let t = 0, n = Ut(0), r;
	return () => {
		fn() && (Z(n), yn(() => (t === 0 && (r = Zn(() => e(() => qt(n)))), t += 1, () => {
			E(() => {
				--t, t === 0 && (r?.(), r = void 0, qt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var st = ae | oe;
function ct(e, t, n, r) {
	new lt(e, t, n, r);
}
var lt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = x ? C : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = ot(() => (this.#m = Ut(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = G;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = G.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = xn(() => {
			if (x) {
				let e = this.#t;
				Pe();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, st), x && (this.#e = C);
	}
	#g() {
		try {
			this.#a = z(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		E(r), t && (this.#s = z(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ne();
				return;
			}
			t = !0, n && ke(), this.#s !== null && On(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					D(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = z(() => e(this.#e)), E(() => {
			var e = this.#c = document.createDocumentFragment(), t = I();
			e.append(t), this.#a = this.#S(() => z(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, On(this.#o, () => {
				this.#o = null;
			}), this.#x(k));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = z(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Mn(this.#a, e);
				let t = this.#n.pending;
				this.#o = z(() => t(this.#e));
			} else this.#x(k);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		$e(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = G, n = H, r = T;
		K(this.#i), W(this.#i), He(this.#i.ctx);
		try {
			return Nt.ensure(), e();
		} catch (e) {
			return Ye(e), null;
		} finally {
			K(t), W(n), He(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && On(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, E(() => {
			this.#d = !1, this.#m && Gt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), Z(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		k?.is_fork ? (this.#a && k.skip_effect(this.#a), this.#o && k.skip_effect(this.#o), this.#s && k.skip_effect(this.#s), k.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (B(this.#a), null), this.#o &&= (B(this.#o), null), this.#s &&= (B(this.#s), null), x && (w(this.#t), Ie(), w(Le()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return z(() => {
						var r = G;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return D(e, this.#i.parent), null;
				}
			}));
		};
		E(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				D(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => D(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function ut(e, t, n, r) {
	let i = Ge() ? mt : vt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = G, c = dt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				D(e, s);
			}
			ft();
		}
	}
	var d = pt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ gt(e))).then(u).catch((e) => D(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), ft();
	}) : f();
}
function dt() {
	var e = G, t = H, n = T, r = k;
	return function(i = !0) {
		K(e), W(t), He(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function ft(e = !0) {
	K(null), W(null), He(null), e && k?.deactivate();
}
function pt() {
	var e = G, t = e.b, n = k, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function mt(e) {
	var n = 2 | y;
	return G !== null && (G.f |= oe), {
		ctx: T,
		deps: null,
		effects: null,
		equals: ze,
		f: n,
		fn: e,
		reactions: null,
		rv: 0,
		v: t,
		wv: 0,
		parent: G,
		ac: null
	};
}
var ht = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function gt(e, n, r) {
	let i = G;
	i === null && Se();
	var a = void 0, o = Ut(t), s = !H, c = /* @__PURE__ */ new Set();
	return vn(() => {
		var t = G, n = ee();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== be && n.reject(e);
			}).finally(ft);
		} catch (e) {
			n.reject(e), ft();
		}
		var r = k;
		if (s) {
			if (t.f & 32768) var l = pt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ht);
			else for (let e of c.values()) e.reject(ht);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== ht && (r.activate(), t ? (o.f |= de, Gt(o, t)) : (o.f & 8388608 && (o.f ^= de), Gt(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), pn(() => {
		for (let e of c) e.reject(ht);
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
function _t(e) {
	let t = /* @__PURE__ */ mt(e);
	return In(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function vt(e) {
	let t = /* @__PURE__ */ mt(e);
	return t.equals = Ve, t;
}
function yt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) B(t[n]);
	}
}
function bt(e) {
	var n, r = G, i = e.parent;
	if (!V && i !== null && e.v !== t && i.f & 24576) return Ae(), e.v;
	K(i);
	try {
		e.f &= ~ce, yt(e), n = Gn(e);
	} finally {
		K(r);
	}
	return n;
}
function xt(e) {
	var t = bt(e);
	if (!e.equals(t) && (e.wv = Hn(), (!k?.is_fork || e.deps === null) && (k === null ? e.v = t : (k.capture(e, t, !0), Tt?.capture(e, t, !0)), e.deps === null))) {
		O(e, v);
		return;
	}
	V || (A === null ? Ze(e) : (fn() || k?.is_fork) && A.set(e, t));
}
function St(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && at(() => {
		t.ac.abort(be), t.ac = null;
	}), t.fn !== null && (t.teardown = h), qn(t, 0), wn(t));
}
function Ct(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Jn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var wt = null, k = null, Tt = null, A = null, Et = null, Dt = !1, Ot = !1, kt = null, At = null, jt = 0, Mt = 1, Nt = class e {
	id = Mt++;
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
		wt === null ? wt = this : (wt.#n = this, this.#t = wt), wt = this;
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
			for (var r of n.d) O(r, y), t(r);
			for (r of n.m) O(r, b), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, jt++ > 1e3 && (this.#x(), Pt());
		for (let e of this.#u) this.#d.delete(e), O(e, y), this.schedule(e);
		for (let e of this.#d) O(e, b), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = kt = [], r = [], i = At = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw Bt(e), this.#h() || this.discard(), t;
		}
		if (k = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (kt = null, At = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) zt(e, t);
			i.length > 0 && k.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), Tt = this, Ft(r), Ft(n), Tt = null, this.#s?.resolve();
		var s = k;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= v;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = (i & 96) != 0;
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= v : i & 4 ? t.push(r) : Un(r) && (i & 16 && this.#d.add(r), Jn(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), O(i, y), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), k = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) $e(e[t], this.#u, this.#d);
	}
	capture(e, n, r = !1) {
		e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)), this.is_fork || (e.v = n);
	}
	activate() {
		k = this;
	}
	deactivate() {
		k = null, A = null;
	}
	flush() {
		try {
			Ot = !0, k = this, this.#g();
		} finally {
			jt = 0, Et = null, kt = null, At = null, Ot = !1, k = null, A = null, N.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(ht);
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
		this.#m || (this.#m = !0, E(() => {
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
		return (this.#s ??= ee()).promise;
	}
	static ensure() {
		if (k === null) {
			let t = k = new e();
			!Ot && !Dt && E(() => {
				t.#e || t.flush();
			});
		}
		return k;
	}
	apply() {
		A = null;
	}
	schedule(e) {
		if (Et = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (kt !== null && t === G && (H === null || !(H.f & 2))) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= v;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? wt = e : t.#t = e, this.linked = !1;
		}
	}
};
function j(e) {
	var t = Dt;
	Dt = !0;
	try {
		var n;
		for (e && (k !== null && !k.is_fork && k.flush(), n = e());;) {
			if (Je(), k === null) return n;
			k.flush();
		}
	} finally {
		Dt = t;
	}
}
function Pt() {
	try {
		Ce();
	} catch (e) {
		D(e, Et);
	}
}
var M = null;
function Ft(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Un(r) && (M = /* @__PURE__ */ new Set(), Jn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Dn(r), M?.size > 0)) {
				N.clear();
				for (let e of M) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) M.has(n) && (M.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Jn(n);
					}
				}
				M.clear();
			}
		}
		M = null;
	}
}
function It(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null)) for (let i of e.reactions) {
		let e = i.f;
		e & 2 ? It(i, t, n, r) : e & 4194320 && !(e & 2048) && Lt(i, t, r) && (O(i, y), Rt(i));
	}
}
function Lt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null) for (let r of e.deps) {
		if (a.call(t, r)) return !0;
		if (r.f & 2 && Lt(r, t, n)) return n.set(r, !0), !0;
	}
	return n.set(e, !1), !1;
}
function Rt(e) {
	k.schedule(e);
}
function zt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), O(e, v);
		for (var n = e.first; n !== null;) zt(n, t), n = n.next;
	}
}
function Bt(e) {
	O(e, v);
	for (var t = e.first; t !== null;) Bt(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Vt = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Map(), Ht = !1;
function Ut(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: ze,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
	let n = Ut(e, t);
	return In(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Wt(e, t = !1, n = !0) {
	let r = Ut(e);
	return t || (r.equals = Ve), r;
}
function F(e, t, n = !1) {
	return H !== null && (!U || H.f & 131072) && Ge() && H.f & 4325394 && (q === null || !q.has(e)) && Oe(), Gt(e, n ? Yt(t) : t, At);
}
function Gt(e, t, n = null) {
	if (!e.equals(t)) {
		N.set(e, V ? t : e.v);
		var r = Nt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && bt(t), A === null && Ze(t);
		}
		e.wv = Hn(), Jt(e, y, n), Ge() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? Ln([e]) : X.push(e)), !r.is_fork && Vt.size > 0 && !Ht && Kt();
	}
	return t;
}
function Kt() {
	Ht = !1;
	for (let e of Vt) {
		e.f & 1024 && O(e, b);
		let t;
		try {
			t = Un(e);
		} catch {
			t = !0;
		}
		t && Jn(e);
	}
	Vt.clear();
}
function qt(e) {
	F(e, e.v + 1);
}
function Jt(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = Ge(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === G)) {
			var l = (c & y) === 0;
			if (l && O(s, t), c & 131072) Vt.add(s);
			else if (c & 2) {
				var u = s;
				A?.delete(u), c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= ce), Jt(u, b, n));
			} else if (l) {
				var d = s;
				c & 16 && M !== null && M.add(d), n === null ? Rt(d) : n.push(d);
			}
		}
	}
}
function Yt(e) {
	if (typeof e != "object" || !e || fe in e) return e;
	let n = p(e);
	if (n !== d && n !== f) return e;
	var i = /* @__PURE__ */ new Map(), a = r(e), o = /* @__PURE__ */ P(0), s = null, c = Bn, u = (e) => {
		if (Bn === c) return e();
		var t = H, n = Bn;
		W(null), Vn(c);
		var r = e();
		return W(t), Vn(n), r;
	};
	return a && i.set("length", /* @__PURE__ */ P(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ee();
			var r = i.get(t);
			return r === void 0 ? u(() => {
				var e = /* @__PURE__ */ P(n.value, s);
				return i.set(t, e), e;
			}) : F(r, n.value, !0), !0;
		},
		deleteProperty(e, n) {
			var r = i.get(n);
			if (r === void 0) {
				if (n in e) {
					let e = u(() => /* @__PURE__ */ P(t, s));
					i.set(n, e), qt(o);
				}
			} else F(r, t), qt(o);
			return !0;
		},
		get(n, r, a) {
			if (r === fe) return e;
			var o = i.get(r), c = r in n;
			if (o === void 0 && (!c || l(n, r)?.writable) && (o = u(() => /* @__PURE__ */ P(Yt(c ? n[r] : t), s)), i.set(r, o)), o !== void 0) {
				var d = Z(o);
				return d === t ? void 0 : d;
			}
			return Reflect.get(n, r, a);
		},
		getOwnPropertyDescriptor(e, n) {
			var r = Reflect.getOwnPropertyDescriptor(e, n);
			if (r && "value" in r) {
				var a = i.get(n);
				a && (r.value = Z(a));
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
			if (n === fe) return !0;
			var r = i.get(n), a = r !== void 0 && r.v !== t || Reflect.has(e, n);
			return (r !== void 0 || G !== null && (!a || l(e, n)?.writable)) && (r === void 0 && (r = u(() => /* @__PURE__ */ P(a ? Yt(e[n]) : t, s)), i.set(n, r)), Z(r) === t) ? !1 : a;
		},
		set(e, n, r, c) {
			var d = i.get(n), f = n in e;
			if (a && n === "length") for (var p = r; p < d.v; p += 1) {
				var m = i.get(p + "");
				m === void 0 ? p in e && (m = u(() => /* @__PURE__ */ P(t, s)), i.set(p + "", m)) : F(m, t);
			}
			if (d === void 0) (!f || l(e, n)?.writable) && (d = u(() => /* @__PURE__ */ P(void 0, s)), F(d, Yt(r)), i.set(n, d));
			else {
				f = d.v !== t;
				var h = u(() => Yt(r));
				F(d, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, n);
			if (g?.set && g.set.call(c, r), !f) {
				if (a && typeof n == "string") {
					var ee = i.get("length"), _ = Number(n);
					Number.isInteger(_) && _ >= ee.v && F(ee, _ + 1);
				}
				qt(o);
			}
			return !0;
		},
		ownKeys(e) {
			Z(o);
			var n = Reflect.ownKeys(e).filter((e) => {
				var n = i.get(e);
				return n === void 0 || n.v !== t;
			});
			for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
			return n;
		},
		setPrototypeOf() {
			De();
		}
	});
}
function Xt(e) {
	try {
		if (typeof e == "object" && e && fe in e) return e[fe];
	} catch {}
	return e;
}
function Zt(e, t) {
	return Object.is(Xt(e), Xt(t));
}
var Qt, $t, en, tn;
function nn() {
	if (Qt === void 0) {
		Qt = window, $t = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		en = l(t, "firstChild").get, tn = l(t, "nextSibling").get, m(e) && (e[ge] = void 0, e[he] = null, e[_e] = void 0, e.__e = void 0), m(n) && (n[ve] = void 0);
	}
}
function I(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function rn(e) {
	return en.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function L(e) {
	return tn.call(e);
}
function an(e, t) {
	if (!x) return /* @__PURE__ */ rn(e);
	var n = /* @__PURE__ */ rn(C);
	if (n === null) n = C.appendChild(I());
	else if (t && n.nodeType !== 3) {
		var r = I();
		return n?.before(r), w(r), r;
	}
	return t && un(n), w(n), n;
}
function on(e, t = !1) {
	if (!x) {
		var n = /* @__PURE__ */ rn(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ L(n) : n;
	}
	if (t) {
		if (C?.nodeType !== 3) {
			var r = I();
			return C?.before(r), w(r), r;
		}
		un(C);
	}
	return C;
}
function sn(e) {
	e.textContent = "";
}
function cn() {
	return !1;
}
function ln(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function un(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function dn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function R(e, t) {
	var n = G;
	n !== null && n.f & 8192 && (e |= te);
	var r = {
		ctx: T,
		deps: null,
		nodes: null,
		f: e | y | 512,
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
	k?.register_created_effect(r);
	var i = r;
	if (e & 4) kt === null ? Nt.ensure().schedule(r) : kt.push(r);
	else if (t !== null) {
		try {
			Jn(r);
		} catch (e) {
			throw B(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= ae));
	}
	if (i !== null && (i.parent = n, n !== null && dn(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function fn() {
	return H !== null && !U;
}
function pn(e) {
	let t = R(8, null);
	return O(t, v), t.teardown = e, t;
}
function mn(e) {
	return R(4 | se, e);
}
function hn(e) {
	Nt.ensure();
	let t = R(64 | oe, e);
	return () => {
		B(t);
	};
}
function gn(e) {
	Nt.ensure();
	let t = R(64 | oe, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? On(t, () => {
			B(t), n(void 0);
		}) : (B(t), n(void 0));
	});
}
function _n(e) {
	return R(4, e);
}
function vn(e) {
	return R(ue | oe, e);
}
function yn(e, t = 0) {
	return R(8 | t, e);
}
function bn(e, t = [], n = [], r = []) {
	ut(r, t, n, (t) => {
		R(8, () => {
			e(...t.map(Z));
		});
	});
}
function xn(e, t = 0) {
	return R(16 | t, e);
}
function Sn(e, t = 0) {
	return R(_ | t, e);
}
function z(e) {
	return R(32 | oe, e);
}
function Cn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = V, n = H;
		Fn(!0), W(null);
		try {
			t.call(null);
		} finally {
			Fn(e), W(n);
		}
	}
}
function wn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && at(() => {
			e.abort(be);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : B(n, t), n = r;
	}
}
function Tn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || B(t), t = n;
	}
}
function B(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (En(e.nodes.start, e.nodes.end), n = !0), e.f |= ie, wn(e, t && !n), qn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	Cn(e), e.f ^= ie, e.f |= ne;
	var i = e.parent;
	i !== null && i.first !== null && Dn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function En(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ L(e);
		e.remove(), e = n;
	}
}
function Dn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function On(e, t, n = !0) {
	var r = [];
	kn(e, r, !0);
	var i = () => {
		n && B(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function kn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= te;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || (i.f & 32) != 0 && (e.f & 16) != 0;
				kn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function An(e) {
	jn(e, !0);
}
function jn(e, t) {
	if (e.f & 8192) {
		e.f ^= te, e.f & 1024 || (O(e, y), Nt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			jn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Mn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ L(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Nn = null, Pn = !1, V = !1;
function Fn(e) {
	V = e;
}
var H = null, U = !1;
function W(e) {
	H = e;
}
var G = null;
function K(e) {
	G = e;
}
var q = null;
function In(e) {
	H !== null && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null, Y = 0, X = null;
function Ln(e) {
	X = e;
}
var Rn = 1, zn = 0, Bn = zn;
function Vn(e) {
	Bn = e;
}
function Hn() {
	return ++Rn;
}
function Un(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~ce), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Un(a) && xt(a), a.wv > e.wv) return !0;
		}
		t & 512 && A === null && O(e, v);
	}
	return !1;
}
function Wn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(q !== null && q.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Wn(a, t, !1) : t === a && (n ? O(a, y) : a.f & 1024 && O(a, b), Rt(a));
	}
}
function Gn(e) {
	var t = J, n = Y, r = X, i = H, a = q, o = T, s = U, c = Bn, l = e.f;
	J = null, Y = 0, X = null, H = l & 96 ? null : e, q = null, He(e.ctx), U = !1, Bn = ++zn, e.ac !== null && (at(() => {
		e.ac.abort(be);
	}), e.ac = null);
	try {
		e.f |= le;
		var u = e.fn, d = u();
		e.f |= re;
		var f = e.deps, p = k?.is_fork;
		if (J !== null) {
			var m;
			if (p || qn(e, Y), f !== null && Y > 0) for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
			else e.deps = f = J;
			if (fn() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Y < f.length && (qn(e, Y), f.length = Y);
		if (Ge() && X !== null && !U && f !== null && !(e.f & 6146)) for (m = 0; m < X.length; m++) Wn(X[m], e);
		if (i !== null && i !== e) {
			if (zn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = zn;
			if (t !== null) for (let e of t) e.rv = zn;
			X !== null && (r === null ? r = X : r.push(...X));
		}
		return e.f & 8388608 && (e.f ^= de), d;
	} catch (e) {
		return Ye(e);
	} finally {
		e.f ^= le, J = t, Y = n, X = r, H = i, q = a, He(o), U = s, Bn = c;
	}
}
function Kn(e, n) {
	let r = n.reactions;
	if (r !== null) {
		var o = i.call(r, e);
		if (o !== -1) {
			var s = r.length - 1;
			s === 0 ? r = n.reactions = null : (r[o] = r[s], r.pop());
		}
	}
	if (r === null && n.f & 2 && (J === null || !a.call(J, n))) {
		var c = n;
		c.f & 512 && (c.f ^= 512, c.f &= ~ce), c.v !== t && Ze(c), c.ac !== null && at(() => {
			c.ac.abort(be), c.ac = null, O(c, y);
		}), St(c), qn(c, 0);
	}
}
function qn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Kn(e, n[r]);
}
function Jn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		O(e, v);
		var n = G, r = Pn;
		G = e, Pn = (t & 96) == 0;
		try {
			t & 16777232 ? Tn(e) : wn(e), Cn(e);
			var i = Gn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Rn;
		} finally {
			Pn = r, G = n;
		}
	}
}
function Z(e) {
	var t = (e.f & 2) != 0;
	if (Nn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e))) {
		var n = H.deps;
		if (H.f & 2097152) e.rv < zn && (e.rv = zn, J === null && n !== null && n[Y] === e ? Y++ : J === null ? J = [e] : J.push(e));
		else {
			H.deps ??= [], a.call(H.deps, e) || H.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [H] : a.call(r, H) || r.push(H);
		}
	}
	if (V && N.has(e)) return N.get(e);
	if (t) {
		var i = e;
		if (V) {
			var o = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Xn(i)) && (o = bt(i)), N.set(i, o), o;
		}
		var s = (i.f & 512) == 0 && !U && H !== null && (Pn || (H.f & 512) != 0), c = (i.f & re) === 0;
		Un(i) && (s && (i.f |= 512), xt(i)), s && !c && (Ct(i), Yn(i));
	}
	if (A?.has(e)) return A.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Yn(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Ct(t), Yn(t));
}
function Xn(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (N.has(t) || t.f & 2 && Xn(t)) return !0;
	return !1;
}
function Zn(e) {
	var t = U;
	try {
		return U = !0, e();
	} finally {
		U = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Qn = Symbol("events"), $n = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new Set();
function tr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ar.call(t, e), !e.cancelBubble) return at(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? E(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function nr(e, t, n) {
	(t[Qn] ??= {})[e] = n;
}
function rr(e) {
	for (var t = 0; t < e.length; t++) $n.add(e[t]);
	for (var n of er) n(e);
}
var ir = null;
function ar(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	ir = e;
	var o = 0, s = ir === e && e[Qn];
	if (s) {
		var l = i.indexOf(s);
		if (l !== -1 && (t === document || t === window)) {
			e[Qn] = t;
			return;
		}
		var u = i.indexOf(t);
		if (u === -1) return;
		l <= u && (o = l);
	}
	if (a = i[o] || e.target, a !== t) {
		c(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = H, f = G;
		W(null), K(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Qn]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Qn] = t, delete e.currentTarget, W(d), K(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var or = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function sr(e) {
	return or?.createHTML(e) ?? e;
}
function cr(e) {
	var t = ln("template");
	return t.innerHTML = sr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function Q(e, t) {
	var n = G;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function lr(e, t) {
	var n = (t & 1) != 0, r = (t & 2) != 0, i, a = !e.startsWith("<!>");
	return () => {
		if (x) return Q(C, null), C;
		i === void 0 && (i = cr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ rn(i)));
		var t = r || $t ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ rn(t), s = t.lastChild;
			Q(o, s);
		} else Q(t, t);
		return t;
	};
}
function ur(e = "") {
	if (!x) {
		var t = I(e + "");
		return Q(t, t), t;
	}
	var n = C;
	return n.nodeType === 3 ? un(n) : (n.before(n = I()), w(n)), Q(n, n), n;
}
function dr() {
	if (x) return Q(C, null), C;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = I();
	return e.append(t, n), Q(t, n), e;
}
function fr(e, t) {
	if (x) {
		var n = G;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = C), Pe();
		return;
	}
	e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/utils.js
function pr(e) {
	return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
var mr = [
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
function hr(e) {
	return mr.includes(e);
}
var gr = /* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split("."), _r = {
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
function vr(e) {
	return e = e.toLowerCase(), _r[e] ?? e;
}
[...gr];
var yr = ["touchstart", "touchmove"];
function br(e) {
	return yr.includes(e);
}
function xr(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ve] ??= e.nodeValue) && (e[ve] = n, e.nodeValue = `${n}`);
}
function Sr(e, t) {
	return Tr(e, t);
}
function Cr(t, n) {
	nn(), n.intro = n.intro ?? !1;
	let r = n.target, i = x, a = C;
	try {
		for (var o = /* @__PURE__ */ rn(r); o && (o.nodeType !== 8 || o.data !== "[");) o = /* @__PURE__ */ L(o);
		if (!o) throw e;
		S(!0), w(o);
		let i = Tr(t, {
			...n,
			anchor: o
		});
		return S(!1), i;
	} catch (i) {
		if (i instanceof Error && i.message.split("\n").some((e) => e.startsWith("https://svelte.dev/e/"))) throw i;
		return i !== e && console.warn("Failed to hydrate: ", i), n.recover === !1 && we(), nn(), sn(r), S(!1), Sr(t, n);
	} finally {
		S(i), w(a);
	}
}
var wr = /* @__PURE__ */ new Map();
function Tr(t, { target: n, anchor: r, props: i = {}, events: a, context: s, intro: c = !0, transformError: l }) {
	nn();
	var u = void 0, d = gn(() => {
		var c = r ?? n.appendChild(I());
		ct(c, { pending: () => {} }, (n) => {
			Ue({});
			var r = T;
			if (s && (r.c = s), a && (i.$$events = a), x && Q(n, null), u = t(n, i) || {}, x && (G.nodes.end = C, C === null || C.nodeType !== 8 || C.data !== "]")) throw je(), e;
			We();
		}, l);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = br(r);
					for (let e of [n, document]) {
						var a = wr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), wr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ar, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(o($n)), er.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = wr.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, ar), t.delete(e), t.size === 0 && wr.delete(r)) : t.set(e, i);
			}
			er.delete(f), c !== r && c.parentNode?.removeChild(c);
		};
	});
	return Er.set(u, d), u;
}
var Er = /* @__PURE__ */ new WeakMap();
function Dr(e, t) {
	let n = Er.get(e);
	return n ? (Er.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Or = class {
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
			if (n) An(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (An(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (B(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Mn(r, t), t.append(I()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else B(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), On(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (B(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = k, r = cn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = I();
			i.append(a), this.#n.set(e, {
				effect: z(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, z(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else x && (this.anchor = C), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function kr(e, t, ...n) {
	var r = new Or(e);
	xn(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, ae);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Ar(e, t, n = !1) {
	var r;
	x && (r = C, Pe());
	var i = new Or(e), a = n ? ae : 0;
	function o(e, t) {
		if (x) {
			var n = Re(r);
			if (e !== parseInt(n.substring(1))) {
				var a = Le();
				w(a), i.anchor = a, S(!1), i.ensure(e, t), S(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	xn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function jr(e, t) {
	_n(() => {
		var n = e.getRootNode(), r = n.host ? n : n.head ?? n.ownerDocument.head;
		if (!r.querySelector("#" + t.hash)) {
			let e = ln("style");
			e.id = t.hash, e.textContent = t.code, r.appendChild(e);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attachments.js
function Mr(e, t) {
	var n = void 0, r;
	Sn(() => {
		n !== (n = t()) && (r &&= (B(r), null), n && (r = z(() => {
			_n(() => n(e));
		})));
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Nr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = Nr(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Pr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Nr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Fr(e) {
	return typeof e == "object" ? Pr(e) : e ?? "";
}
var Ir = [..." 	\n\r\f\xA0\v﻿"];
function Lr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Ir.includes(r[o - 1])) && (s === r.length || Ir.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Rr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function zr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Br(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(zr)), i && c.push(...Object.keys(i).map(zr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = zr(e.substring(l, u).trim());
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
		return r && (n += Rr(r)), i && (n += Rr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Vr(e, t, n, r, i, a) {
	var o = e[ge];
	if (x || o !== n || o === void 0) {
		var s = Lr(n, r, a);
		(!x || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ge] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Hr(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Ur(e, t, n, r) {
	var i = e[_e];
	if (x || i !== t) {
		var a = Br(t, r);
		(!x || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[_e] = t;
	} else r && (Array.isArray(r) ? (Hr(e, n?.[0], r[0]), Hr(e, n?.[1], r[1], "important")) : Hr(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Wr(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!r(t)) return Me();
		for (var i of e.options) i.selected = t.includes(Kr(i));
		return;
	}
	for (i of e.options) if (Zt(Kr(i), t)) {
		i.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Gr(e) {
	var t = new MutationObserver(() => {
		"__value" in e && Wr(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), pn(() => {
		t.disconnect();
	});
}
function Kr(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var qr = Symbol("class"), Jr = Symbol("style"), Yr = Symbol("is custom element"), Xr = Symbol("is html"), Zr = xe ? "link" : "LINK", Qr = xe ? "input" : "INPUT", $r = xe ? "option" : "OPTION", ei = xe ? "select" : "SELECT";
function ti(e) {
	if (x) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					ri(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					ri(e, "checked", null), e.checked = r;
				}
			}
		};
		e[ye] = n, E(n), it();
	}
}
function ni(e, t) {
	t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function ri(e, t, n, r) {
	var i = oi(e);
	x && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === Zr) || i[t] !== (i[t] = n) && (t === "loading" && (e[me] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ci(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ii(e, n, r, i, a = !1, o = !1) {
	if (x && a && e.nodeName === Qr) {
		var s = e;
		(s.type === "checkbox" ? "defaultChecked" : "defaultValue") in r || ti(s);
	}
	var c = oi(e), l = c[Yr], u = !c[Xr];
	let d = x && l;
	d && S(!1);
	var f = n || {}, p = e.nodeName === $r;
	for (var m in n) m in r || (r[m] = null);
	r.class ? r.class = Fr(r.class) : (i || r[qr]) && (r.class = null), r[Jr] && (r.style ??= null);
	var h = ci(e);
	if (e.nodeName === Qr && "type" in r && ("value" in r || "__value" in r)) {
		var g = r.type;
		(g !== f.type || g === void 0 && e.hasAttribute("type")) && (f.type = g, ri(e, "type", g, o));
	}
	for (let a in r) {
		let s = r[a];
		if (p && a === "value" && s == null) {
			e.value = e.__value = "", f[a] = s;
			continue;
		}
		if (a === "class") {
			Vr(e, e.namespaceURI === "http://www.w3.org/1999/xhtml", s, i, n?.[qr], r[qr]), f[a] = s, f[qr] = r[qr];
			continue;
		}
		if (a === "style") {
			Ur(e, s, n?.[Jr], r[Jr]), f[a] = s, f[Jr] = r[Jr];
			continue;
		}
		var ee = f[a];
		if (!(s === ee && !(s === void 0 && e.hasAttribute(a)))) {
			f[a] = s;
			var _ = a[0] + a[1];
			if (_ !== "$$") if (_ === "on") {
				let t = {}, n = "$$" + a, r = a.slice(2);
				var v = hr(r);
				if (pr(r) && (r = r.slice(0, -7), t.capture = !0), !v && ee) {
					if (s != null) continue;
					e.removeEventListener(r, f[n], t), f[n] = null;
				}
				if (v) nr(r, e, s), rr([r]);
				else if (s != null) {
					function i(e) {
						f[a].call(this, e);
					}
					f[n] = tr(r, e, i, t);
				}
			} else if (a === "style") ri(e, a, s);
			else if (a === "autofocus") nt(e, !!s);
			else if (!l && (a === "__value" || a === "value" && s != null)) e.value = e.__value = s;
			else if (a === "selected" && p) ni(e, s);
			else {
				var y = a;
				u || (y = vr(y));
				var b = y === "defaultValue" || y === "defaultChecked";
				if (s == null && !l && !b) if (c[a] = null, y === "value" || y === "checked") {
					let t = e, r = n === void 0;
					if (y === "value") {
						let e = t.defaultValue;
						t.removeAttribute(y), t.defaultValue = e, t.value = t.__value = r ? e : null;
					} else {
						let e = t.defaultChecked;
						t.removeAttribute(y), t.defaultChecked = e, t.checked = r ? e : !1;
					}
				} else e.removeAttribute(a);
				else b || h.includes(y) && (l || typeof s != "string") ? (e[y] = s, y in c && (c[y] = t)) : typeof s != "function" && ri(e, y, s, o);
			}
		}
	}
	return d && S(!0), f;
}
function ai(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	ut(i, n, r, (n) => {
		var r = void 0, i = {}, c = e.nodeName === ei, l = !1;
		if (Sn(() => {
			var u = t(...n.map(Z)), d = ii(e, r, u, a, o, s);
			l && c && "value" in u && Wr(e, u.value);
			for (let e of Object.getOwnPropertySymbols(i)) u[e] || B(i[e]);
			for (let t of Object.getOwnPropertySymbols(u)) {
				var f = u[t];
				t.description === "@attach" && (!r || f !== r[t]) && (i[t] && B(i[t]), i[t] = z(() => Mr(e, () => f))), d[t] = f;
			}
			r = d;
		}), c) {
			var u = e;
			_n(() => {
				Wr(u, r.value, !0), Gr(u);
			});
		}
		l = !0;
	});
}
function oi(e) {
	return e[he] ??= {
		[Yr]: e.nodeName.includes("-"),
		[Xr]: e.namespaceURI === n
	};
}
var si = /* @__PURE__ */ new Map();
function ci(e) {
	var t = e.getAttribute("is") || e.nodeName, n = si.get(t);
	if (n) return n;
	si.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = u(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = p(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var li = {
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
function ui(e, t, n) {
	return new Proxy({
		props: e,
		exclude: t
	}, li);
}
function $(e, t, n, r) {
	var i = !0, a = (n & 8) != 0, o = (n & 16) != 0, s = r, c = !0, u = void 0, d = () => o && i ? (u ??= /* @__PURE__ */ mt(r), Z(u)) : (c && (c = !1, s = o ? Zn(r) : r), s);
	let f;
	if (a) {
		var p = fe in e || pe in e;
		f = l(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = tt(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Te(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var ee = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || ee || h) && f(t ? g() : e), e) : g();
		});
	}
	var _ = !1, v = (n & 1 ? mt : vt)(() => (_ = !1, g()));
	a && Z(v);
	var y = G;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? Z(v) : i && a ? Yt(e) : e;
			return F(v, n), _ = !0, s !== void 0 && (s = n), e;
		}
		return V && _ || y.f & 16384 ? v.v : Z(v);
	});
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function di(e) {
	return new fi(e);
}
var fi = class {
	#e;
	#t;
	constructor(e) {
		var t = /* @__PURE__ */ new Map(), n = (e, n) => {
			var r = /* @__PURE__ */ Wt(n, !1, !1);
			return t.set(e, r), r;
		};
		let r = new Proxy({
			...e.props || {},
			$$events: {}
		}, {
			get(e, r) {
				return Z(t.get(r) ?? n(r, Reflect.get(e, r)));
			},
			has(e, r) {
				return r === pe ? !0 : (Z(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
			},
			set(e, r, i) {
				return F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i);
			}
		});
		this.#t = (e.hydrate ? Cr : Sr)(e.component, {
			target: e.target,
			anchor: e.anchor,
			props: r,
			context: e.context,
			intro: e.intro ?? !1,
			recover: e.recover,
			transformError: e.transformError
		}), (!e?.props?.$$host || e.sync === !1) && j(), this.#e = r.$$events;
		for (let e of Object.keys(this.#t)) e === "$set" || e === "$destroy" || e === "$on" || c(this, e, {
			get() {
				return this.#t[e];
			},
			set(t) {
				this.#t[e] = t;
			},
			enumerable: !0
		});
		this.#t.$set = (e) => {
			Object.assign(r, e);
		}, this.#t.$destroy = () => {
			Dr(this.#t);
		};
	}
	$set(e) {
		this.#t.$set(e);
	}
	$on(e, t) {
		this.#e[e] = this.#e[e] || [];
		let n = (...e) => t.call(this, ...e);
		return this.#e[e].push(n), () => {
			this.#e[e] = this.#e[e].filter((e) => e !== n);
		};
	}
	$destroy() {
		this.#t.$destroy();
	}
}, pi;
typeof HTMLElement == "function" && (pi = class extends HTMLElement {
	$$ctor;
	$$s;
	$$c;
	$$cn = !1;
	$$d = {};
	$$r = !1;
	$$p_d = {};
	$$l = {};
	$$l_u = /* @__PURE__ */ new Map();
	$$me;
	$$shadowRoot = null;
	constructor(e, t, n) {
		super(), this.$$ctor = e, this.$$s = t, n && (this.$$shadowRoot = this.attachShadow(n));
	}
	addEventListener(e, t, n) {
		if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
			let n = this.$$c.$on(e, t);
			this.$$l_u.set(t, n);
		}
		super.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		if (super.removeEventListener(e, t, n), this.$$c) {
			let e = this.$$l_u.get(t);
			e && (e(), this.$$l_u.delete(t));
		}
	}
	async connectedCallback() {
		if (this.$$cn = !0, !this.$$c) {
			if (await Promise.resolve(), !this.$$cn || this.$$c) return;
			function e(e) {
				return (t) => {
					let n = ln("slot");
					e !== "default" && (n.name = e), fr(t, n);
				};
			}
			let t = {}, n = hi(this);
			for (let r of this.$$s) r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
			for (let e of this.attributes) {
				let t = this.$$g_p(e.name);
				t in this.$$d || (this.$$d[t] = mi(t, e.value, this.$$p_d, "toProp"));
			}
			for (let e in this.$$p_d) !(e in this.$$d) && this[e] !== void 0 && (this.$$d[e] = this[e], delete this[e]);
			this.$$c = di({
				component: this.$$ctor,
				target: this.$$shadowRoot || this,
				props: {
					...this.$$d,
					$$slots: t,
					$$host: this
				}
			}), this.$$me = hn(() => {
				yn(() => {
					this.$$r = !0;
					for (let e of s(this.$$c)) {
						if (!this.$$p_d[e]?.reflect) continue;
						this.$$d[e] = this.$$c[e];
						let t = mi(e, this.$$d[e], this.$$p_d, "toAttribute");
						t == null ? this.removeAttribute(this.$$p_d[e].attribute || e) : this.setAttribute(this.$$p_d[e].attribute || e, t);
					}
					this.$$r = !1;
				});
			});
			for (let e in this.$$l) for (let t of this.$$l[e]) {
				let n = this.$$c.$on(e, t);
				this.$$l_u.set(t, n);
			}
			this.$$l = {};
		}
	}
	attributeChangedCallback(e, t, n) {
		this.$$r || (e = this.$$g_p(e), this.$$d[e] = mi(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
	}
	disconnectedCallback() {
		this.$$cn = !1, Promise.resolve().then(() => {
			!this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
		});
	}
	$$g_p(e) {
		return s(this.$$p_d).find((t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e;
	}
});
function mi(e, t, n, r) {
	let i = n[e]?.type;
	if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e]) return t;
	if (r === "toAttribute") switch (i) {
		case "Object":
		case "Array": return t == null ? null : JSON.stringify(t);
		case "Boolean": return t ? "" : null;
		case "Number": return t ?? null;
		default: return t;
	}
	else switch (i) {
		case "Object":
		case "Array": return t && JSON.parse(t);
		case "Boolean": return t;
		case "Number": return t == null ? t : +t;
		default: return t;
	}
}
function hi(e) {
	let t = {};
	return e.childNodes.forEach((e) => {
		t[e.slot || "default"] = !0;
	}), t;
}
function gi(e, t, n, r, i, a) {
	let o = class extends pi {
		constructor() {
			super(e, n, i), this.$$p_d = t;
		}
		static get observedAttributes() {
			return s(t).map((e) => (t[e].attribute || e).toLowerCase());
		}
	};
	return s(t).forEach((e) => {
		c(o.prototype, e, {
			get() {
				return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
			},
			set(n) {
				n = mi(e, n, t), this.$$d[e] = n;
				var r = this.$$c;
				r && (l(r, e)?.get ? r[e] = n : r.$set({ [e]: n }));
			}
		});
	}), r.forEach((e) => {
		c(o.prototype, e, { get() {
			return this.$$c?.[e];
		} });
	}), a && (o = a(o)), e.element = o, o;
}
//#endregion
//#region src/safe-href.ts
var _i = /[\p{Cc}\p{Cf}\p{Z}]/u, vi = /^([a-z][a-z0-9+.-]*):/iu, yi = /* @__PURE__ */ new Set([
	"https:",
	"mailto:",
	"tel:"
]);
function bi(e) {
	if (typeof e != "string" || e.length === 0) throw TypeError("href must be a non-empty string");
	if (_i.test(e)) throw TypeError("href must not contain separator, control, or formatting characters");
	if (e.startsWith("//") || e.includes("\\")) throw TypeError("href must not use a network-path reference or backslash");
	let t = vi.exec(e)?.[1];
	if (t && !yi.has(`${t.toLowerCase()}:`)) throw TypeError("href scheme must be https, mailto, or tel");
	return e;
}
//#endregion
//#region src/WornButton.svelte
var xi = /* @__PURE__ */ new Set([
	"$$slots",
	"$$events",
	"$$legacy",
	"variant",
	"disabled",
	"size",
	"type",
	"href",
	"class",
	"onclick",
	"children"
]), Si = /* @__PURE__ */ lr("<a><!></a>"), Ci = /* @__PURE__ */ lr("<button><!></button>"), wi = {
	hash: "svelte-1a7eo45",
	code: ".worn-btn.svelte-1a7eo45 {appearance:none;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;gap:6px;max-inline-size:100%;min-inline-size:0;font-family:var(--font-typewriter);font-size:13px;font-weight:610;letter-spacing:0;line-height:1.2;min-height:36px;overflow-wrap:anywhere;padding:8px 16px;border:1px solid var(--worn-border);border-radius:var(--worn-radius);background:var(--worn-surface);color:var(--worn-text);cursor:pointer;text-align:center;text-decoration:none;touch-action:manipulation;transition:box-shadow 0.12s ease, background-color 0.1s ease, color 0.1s ease, border-color 0.1s ease, filter 0.1s ease;user-select:none;white-space:normal;}.worn-btn.svelte-1a7eo45 > * {max-inline-size:100%;min-inline-size:0;}.worn-btn.is-sm.svelte-1a7eo45 {font-size:12px;min-height:32px;padding:4px 10px;}.worn-btn.is-primary.svelte-1a7eo45 {background:var(--worn-accent);border-color:var(--worn-accent);color:var(--worn-accent-text);}\n	@media (hover: hover) and (pointer: fine) {.worn-btn.is-primary.svelte-1a7eo45:hover:not(:disabled):not([aria-disabled='true']) {filter:brightness(0.98);box-shadow:0 2px 4px rgb(0 0 0 / 0.14);}.worn-btn.is-warning.svelte-1a7eo45:hover:not(:disabled):not([aria-disabled='true']) {background:var(--worn-warning-bg);}.worn-btn.svelte-1a7eo45:hover:not(:disabled):not([aria-disabled='true']) {filter:brightness(0.96);}\n	}.worn-btn.is-primary.svelte-1a7eo45:active:not(:disabled):not([aria-disabled='true']) {filter:brightness(0.94);box-shadow:inset 0 1px 2px rgb(0 0 0 / 0.16);}.worn-btn.is-danger.svelte-1a7eo45 {background:var(--worn-danger-bg);border-color:var(--worn-danger-border);color:var(--worn-danger-text);}.worn-btn.is-warning.svelte-1a7eo45 {background:transparent;border-color:var(--worn-warning-text);color:var(--worn-warning-text);}.worn-btn.svelte-1a7eo45:active:not(:disabled):not([aria-disabled='true']) {box-shadow:inset 0 1px 2px rgb(0 0 0 / 0.12);}.worn-btn[aria-pressed='true'].svelte-1a7eo45:not(:disabled):not([aria-disabled='true']) {background:var(--worn-accent);border-color:var(--worn-accent);color:var(--worn-accent-text);filter:brightness(0.98);box-shadow:inset 0 1px 2px rgb(0 0 0 / 0.14);}.worn-btn.svelte-1a7eo45:focus-visible {outline:2px dashed var(--worn-button-focus, var(--worn-focus, var(--worn-text, #21322b)));outline-offset:2px;}\n	@media (pointer: coarse) {.worn-btn.svelte-1a7eo45,\n		.worn-btn.is-sm.svelte-1a7eo45 {font-size:14px;min-width:44px;min-height:44px;}\n	}\n	@media (prefers-reduced-motion: reduce) {.worn-btn.svelte-1a7eo45 {transition:none;}\n	}.worn-btn.svelte-1a7eo45.is-active {background:var(--worn-accent);border-color:var(--worn-accent);color:var(--worn-accent-text);\n		animation: energy-pulse 0.2s ease-out;}.worn-btn.worn-btn.svelte-1a7eo45:disabled,\n	.worn-btn.worn-btn[aria-disabled='true'].svelte-1a7eo45 {background:var(--worn-bg-secondary);border-color:var(--worn-border);color:var(--worn-text-muted);cursor:not-allowed;filter:none;opacity:1;box-shadow:none;\n		animation: none;}"
};
function Ti(e, t) {
	Ue(t, !0), jr(e, wi);
	let n = $(t, "variant", 3, "default"), r = $(t, "disabled", 3, !1), i = $(t, "size", 3, "md"), a = $(t, "type", 3, "button"), o = /* @__PURE__ */ ui(t, xi), s = /* @__PURE__ */ _t(() => t.href === void 0 ? void 0 : bi(t.href));
	var c = dr(), l = on(c), u = (e) => {
		var a = Si(), c = (e) => {
			if (r()) {
				e.preventDefault();
				return;
			}
			t.onclick?.(e);
		};
		ai(a, () => ({
			href: Z(s),
			...o,
			class: t.class ? `worn-btn ${t.class}` : "worn-btn",
			"aria-disabled": r() || void 0,
			tabindex: r() ? -1 : void 0,
			onclick: c,
			[qr]: {
				"is-primary": n() === "primary",
				"is-danger": n() === "danger",
				"is-warning": n() === "warning",
				"is-sm": i() === "sm"
			}
		}), void 0, void 0, void 0, "svelte-1a7eo45"), kr(an(a), () => t.children ?? h), Fe(a), fr(e, a);
	}, d = (e) => {
		var s = Ci();
		ai(s, () => ({
			type: a(),
			...o,
			class: t.class ? `worn-btn ${t.class}` : "worn-btn",
			disabled: r(),
			onclick: t.onclick,
			[qr]: {
				"is-primary": n() === "primary",
				"is-danger": n() === "danger",
				"is-warning": n() === "warning",
				"is-sm": i() === "sm"
			}
		}), void 0, void 0, void 0, "svelte-1a7eo45"), kr(an(s), () => t.children ?? h), Fe(s), fr(e, s);
	};
	Ar(l, (e) => {
		Z(s) ? e(u) : e(d, -1);
	}), fr(e, c), We();
}
//#endregion
//#region src/ButtonElement.svelte
function Ei(e, t) {
	Ue(t, !0);
	let n = $(t, "label", 7, "Button"), r = $(t, "variant", 7, "default"), i = $(t, "disabled", 7, !1), a = $(t, "size", 7, "md"), o = $(t, "type", 7, "button"), s = $(t, "href", 7);
	var c = {
		get label() {
			return n();
		},
		set label(e = "Button") {
			n(e), j();
		},
		get variant() {
			return r();
		},
		set variant(e = "default") {
			r(e), j();
		},
		get disabled() {
			return i();
		},
		set disabled(e = !1) {
			i(e), j();
		},
		get size() {
			return a();
		},
		set size(e = "md") {
			a(e), j();
		},
		get type() {
			return o();
		},
		set type(e = "button") {
			o(e), j();
		},
		get href() {
			return s();
		},
		set href(e) {
			s(e), j();
		}
	};
	{
		let t = /* @__PURE__ */ _t(() => s() ?? void 0);
		Ti(e, {
			get variant() {
				return r();
			},
			get disabled() {
				return i();
			},
			get size() {
				return a();
			},
			get type() {
				return o();
			},
			get href() {
				return Z(t);
			},
			children: (e, t) => {
				Ie();
				var r = ur();
				bn(() => xr(r, n())), fr(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	return We(c);
}
customElements.define("worn-button", gi(Ei, {
	label: {},
	variant: {},
	disabled: { type: "Boolean" },
	size: {},
	type: {},
	href: {}
}, [], []));
//#endregion
export { Ei as default };
