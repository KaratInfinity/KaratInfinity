import os
import shutil

def ts_str(value: str) -> str:
    return "'" + value.replace("\\", "\\\\").replace("'", "\\'") + "'"

root = r"C:\Users\DELL\Downloads\Karat-Infinity-Cinematic-Edition"
src = os.path.join(root, "tmp-product-list", "xl", "media")
out = os.path.join(root, "public", "products")
os.makedirs(out, exist_ok=True)

row_img = {
    2: "image4.jpg",
    3: "image5.jpg",
    4: "image6.png",
    5: "image6.png",
    6: "image8.png",
    7: "image25.png",
    8: "image7.png",
    9: "image33.png",
    10: "image33.png",
    11: "image9.jpg",
    12: "image10.jpg",
    13: "image1.jpeg",
    14: "image11.jpg",
    15: "image12.jpg",
    16: "image26.jpg",
    17: "image13.jpg",
    18: "image14.jpg",
    19: "image15.jpg",
    20: "image15.jpg",
    21: "image14.jpg",
    22: "image14.jpg",
    23: "image14.jpg",
    24: "image17.jpg",
    25: "image27.jpg",
    26: "image16.jpg",
    27: "image3.jpg",
    28: "image28.jpg",
    29: "image19.jpg",
    30: "image18.png",
    31: "image18.png",
    32: "image18.png",
    33: "image21.png",
    34: "image34.png",
    35: "image20.png",
    36: "image24.png",
    37: "image22.png",
    38: "image35.png",
    39: "image36.png",
    40: "image37.png",
    41: "image23.png",
    42: "image29.jpeg",
    43: "image31.png",
}

products = [
    (1, "lpf-1-switch", "LPF 1 Switch (16A Relay)", "LPF 1", "Smart switches", "LPF", "A single-gang LPF smart switch with a 16A relay for everyday lighting and appliance control."),
    (2, "lpf-2-switch", "LPF 2 Switch (16A Relay)", "LPF 2", "Smart switches", "LPF", "A two-gang LPF smart switch with 16A relays for controlling two loads from one plate."),
    (3, "nexa-1-switch", "NEXA 1 Switch (10A Relay)", "NEXA 1", "Smart switches", "NEXA", "A compact NEXA one-gang switch with a 10A relay for connected lighting circuits."),
    (4, "nexa-2-switch", "NEXA 2 Switch (10A Relay)", "NEXA 2", "Smart switches", "NEXA", "A NEXA two-gang switch with 10A relays for paired lighting or mixed room loads."),
    (5, "nexa-5-switch", "NEXA 5 Switch (10A Relay)", "NEXA 5", "Smart switches", "NEXA", "A five-gang NEXA switchboard with 10A relays for multi-point room control."),
    (6, "nexa-1-switch-1-fan", "NEXA 1 Switch 1 Fan (10A Relay)", "NEXA 1+Fan", "Smart switches", "NEXA", "A NEXA plate combining one switch and one fan control on 10A relays."),
    (7, "nexa-hd-switch-25a", "NEXA HD Switch 25A", "NEXA HD 25A", "Smart switches", "NEXA", "A heavy-duty NEXA 25A switch with power monitoring for high-load circuits."),
    (8, "nexa-2-switch-1-fan", "NEXA 2 Switch 1 Fan (10A Relay)", "NEXA 2+Fan", "Smart switches", "NEXA", "A NEXA combination plate with two switches and one fan control."),
    (9, "nexa-4-switch-1-fan", "NEXA 4 Switch 1 Fan (10A Relay)", "NEXA 4+Fan", "Smart switches", "NEXA", "A NEXA combination plate with four switches and one fan control for larger rooms."),
    (10, "hd-touch-vpro", "HD Touch VPro (25A Relay and RGB LED)", "HD Touch VPro", "Touch panels", "VPro", "A high-duty 25A VPro touch panel with RGB LED feedback for connected high-load switching."),
    (11, "2-touch-vpro", "2 Touch VPro (10A Relay and RGB LED)", "2 Touch VPro", "Touch panels", "VPro", "A two-gang VPro glass touch panel with 10A relays and RGB LED indication."),
    (12, "fan-dimmer-touch-vpro", "Fan Dimmer Touch VPro (10A Relay and RGB LED)", "Fan Dimmer VPro", "Touch panels", "VPro", "A VPro touch dimmer for fan speed control with 10A relay switching and RGB LED feedback."),
    (13, "4-touch-rpro", "4 Touch RPro (10A Relay and RGB LED)", "4 Touch RPro", "Touch panels", "RPro", "A four-gang RPro touch panel with 10A relays and RGB LED indication."),
    (14, "magnetic-glass-touch-2-switch", "Magnetic+ Glass Touch 2 Switch (2M/3M)", "Magnetic+ 2 Switch", "Magnetic+ glass", "Magnetic+", "A two-switch Magnetic+ glass touch plate in 2M/3M modular sizes."),
    (15, "magnetic-glass-touch-4-switch", "Magnetic+ Glass Touch 4 Switch (2M/3M)", "Magnetic+ 4 Switch", "Magnetic+ glass", "Magnetic+", "A four-switch Magnetic+ glass touch plate in 2M/3M modular sizes."),
    (16, "magnetic-glass-touch-fan-switch", "Magnetic+ Glass Touch Fan Switch (2M/3M)", "Magnetic+ Fan", "Magnetic+ glass", "Magnetic+", "A Magnetic+ glass touch fan controller in 2M/3M modular sizes."),
    (17, "magnetic-glass-touch-4-switch-1-fan", "Magnetic+ Glass Touch 4 Switch 1 Fan (4M)", "Magnetic+ 4+Fan", "Magnetic+ glass", "Magnetic+", "A 4M Magnetic+ plate with four switches and one fan control, including HD and 2-way options."),
    (18, "magnetic-glass-touch-8-switch-1-socket", "Magnetic+ Glass Touch 8 Switch 1 Socket (6M)", "Magnetic+ 8+Socket", "Magnetic+ glass", "Magnetic+", "A 6M Magnetic+ plate with eight switches and one socket, including HD and 2-way options."),
    (19, "magnetic-glass-touch-4-switch-1-fan-1-socket", "Magnetic+ Glass Touch 4 Switch 1 Fan 1 Socket (6M)", "Magnetic+ 4 Combo", "Magnetic+ glass", "Magnetic+", "A 6M Magnetic+ combination plate for switches, fan control and a socket."),
    (20, "magnetic-glass-touch-8-switch-1-fan", "Magnetic+ Glass Touch 8 Switch 1 Fan (8M)", "Magnetic+ 8+Fan", "Magnetic+ glass", "Magnetic+", "An 8M Magnetic+ plate with eight switches and one fan control."),
    (21, "magnetic-glass-touch-16-switch-2-fan", "Magnetic+ Glass Touch 16 Switch 2 Fan (12M)", "Magnetic+ 16+2 Fan", "Magnetic+ glass", "Magnetic+", "A 12M Magnetic+ plate with sixteen switches and two fan controls."),
    (22, "magnetic-glass-touch-12-switch-1-fan-2-socket", "Magnetic+ Glass Touch 12 Switch 1 Fan 2 Socket (12M)", "Magnetic+ 12 Combo", "Magnetic+ glass", "Magnetic+", "A 12M Magnetic+ combination plate with twelve switches, one fan control and two sockets."),
    (23, "rockair-5blade-bldc-iot-fan", "Rockair 5-Blade BLDC IoT Fan", "Rockair", "IoT fans", "BLDC fans", "A five-blade Rockair BLDC ceiling fan with IoT control for quieter, connected airflow."),
    (24, "atom-3blade-bldc-iot-fan", "Atom 3-Blade BLDC IoT Fan", "Atom", "IoT fans", "BLDC fans", "A three-blade Atom BLDC ceiling fan with IoT control for compact rooms."),
    (25, "glostar-3blade-bldc-iot-fan", "GloStar 3-Blade BLDC IoT Fan", "GloStar", "IoT fans", "BLDC fans", "A three-blade GloStar BLDC ceiling fan with IoT control and a decorative profile."),
    (26, "sportage-blade-bldc-iot-fan", "Sportage Blade BLDC IoT Fan", "Sportage", "IoT fans", "BLDC fans", "A Sportage-blade BLDC ceiling fan with IoT control for connected living spaces."),
    (27, "arval-3blade-bldc-iot-fan", "Arval 3-Blade BLDC IoT Fan", "Arval", "IoT fans", "BLDC fans", "A three-blade Arval BLDC ceiling fan with IoT control."),
    (28, "iot-multi-cooker", "IoT Multi Cooker", "IoT Cooker", "Kitchen appliances", "IoT appliances", "A connected multi cooker for scheduled, remote and sensor-aware cooking."),
    (29, "1phase-pump-controller-iot", "1-Phase Pump Controller with IoT", "1-Phase IoT Pump", "Pump controllers", "Pump control", "A single-phase pump controller with IoT monitoring and remote operation."),
    (30, "3phase-pump-controller-iot", "3-Phase Pump Controller with IoT", "3-Phase IoT Pump", "Pump controllers", "Pump control", "A three-phase pump controller with IoT monitoring for agricultural and utility pumps."),
    (31, "3phase-pump-controller-gsm", "3-Phase Pump Controller with GSM", "3-Phase GSM Pump", "Pump controllers", "Pump control", "A three-phase pump controller with GSM connectivity where internet is limited."),
    (32, "bldc-ceiling-fan-iot", "BLDC Ceiling Fan with IoT", "BLDC IoT Fan", "IoT fans", "BLDC fans", "A connected BLDC ceiling fan designed for efficient, app-ready room airflow."),
    (33, "bldc-ceiling-fan-iot-ii", "BLDC Ceiling Fan with IoT — Variant", "BLDC IoT Fan II", "IoT fans", "BLDC fans", "A second BLDC IoT ceiling fan variant from the Karat Infinity product list."),
    (34, "bldc-ceiling-fan-led-wooden", "BLDC Ceiling Fan with LED and Wooden Blades", "Wooden LED Fan", "IoT fans", "BLDC fans", "A BLDC ceiling fan with wooden blades and integrated LED lighting."),
    (35, "jewellery-elabel-1inch", "Jewellery e-Label Display 1 inch", "e-Label 1 in", "e-Label displays", "e-Label", "A 1-inch electronic label display for jewellery pricing and product identity."),
    (36, "jewellery-elabel-1-5inch", "Jewellery e-Label Display 1.5 inch", "e-Label 1.5 in", "e-Label displays", "e-Label", "A 1.5-inch electronic label display for jewellery counters."),
    (37, "jewellery-elabel-2-1inch", "Jewellery e-Label Display 2.1 inch", "e-Label 2.1 in", "e-Label displays", "e-Label", "A 2.1-inch electronic label display for jewellery product information."),
    (38, "elabel-display-2-1inch-shops", "e-Label Display 2.1 inch for Shops", "Shop e-Label 2.1 in", "e-Label displays", "e-Label", "A 2.1-inch electronic shelf label for retail pricing and product details."),
    (39, "elabel-display-2-9inch-shops", "e-Label Display 2.9 inch for Shops", "Shop e-Label 2.9 in", "e-Label displays", "e-Label", "A 2.9-inch electronic shelf label for shop aisles and counter displays."),
    (40, "elabel-display-4-1inch-shops", "e-Label Display 4.1 inch for Shops", "Shop e-Label 4.1 in", "e-Label displays", "e-Label", "A 4.1-inch electronic shelf label for larger retail product information."),
    (41, "smart-plug-iot", "Smart Plug with IoT", "Smart Plug", "Power and connectivity", "IoT power", "A connected smart plug for scheduling, remote switching and appliance monitoring."),
    (42, "busbar-system", "Busbar System", "Busbar", "Power and connectivity", "Power distribution", "A busbar system for organised, compact electrical distribution in connected installations."),
]

highlights = {
    "Smart switches": ["Relay-based load control", "Fits standard modular plates", "Built for connected home and workspace circuits", "Pairs with the Karat Infinity ecosystem"],
    "Touch panels": ["Capacitive glass touch control", "RGB LED status feedback", "Relay switching for lighting and fans", "Designed for premium connected interiors"],
    "Magnetic+ glass": ["Magnetic+ glass touch finish", "Modular 2M to 12M plate sizes", "HD and 2-way switching options", "Combines switches, fans and sockets on one plate"],
    "IoT fans": ["BLDC motor efficiency", "IoT-ready speed and schedule control", "Designed for connected living spaces", "Works with the wider Karat Infinity product family"],
    "Kitchen appliances": ["IoT scheduling and remote status", "Built for everyday kitchen workflows", "Connects physical cooking to digital control", "Part of the Karat Infinity connected-product line"],
    "Pump controllers": ["Single or three-phase pump control", "IoT or GSM connectivity options", "Remote start, stop and status visibility", "Built for agricultural and utility installations"],
    "e-Label displays": ["Electronic product labelling", "Sizes for jewellery and retail shelves", "Update pricing without printed labels", "Connects physical products to digital information"],
    "Power and connectivity": ["Adds connected control at the socket or distribution layer", "Designed for installations alongside Karat Infinity switches", "IoT-ready where the product supports it", "Completes the on-site electrical product family"],
}

overviews = {
    "Smart switches": "Karat Infinity smart switches bring everyday lighting and appliance circuits into a connected plate. Each model is specified by gang count and relay rating so installers can match the load, while the same family language stays consistent from a single switch to a full room plate.",
    "Touch panels": "VPro and RPro touch panels replace conventional rockers with a glass control surface. Relay ratings and RGB LED feedback are part of the product, so high-load circuits and multi-gang rooms can still feel like one control language.",
    "Magnetic+ glass": "Magnetic+ glass touch plates combine switches, fan control and sockets in modular sizes from 2M to 12M. HD and 2-way options are called out on the combination models so larger rooms can be specified from a single family.",
    "IoT fans": "The BLDC IoT fan range covers named models such as Rockair, Atom, GloStar, Sportage and Arval, plus ceiling-fan variants with LED and wooden blades. Each fan is a connected product first — efficient airflow with a path into the Karat Infinity ecosystem.",
    "Kitchen appliances": "The IoT multi cooker extends Karat Infinity beyond switches and fans into the kitchen. It is specified as a connected appliance so cooking can follow the same remote and scheduled control model as the rest of the product family.",
    "Pump controllers": "Pump controllers cover 1-phase IoT, 3-phase IoT and 3-phase GSM models. They are field products: start, stop and status for agricultural or utility pumps, with connectivity chosen for the site.",
    "e-Label displays": "e-Label displays bring product information onto the counter and the shelf. Jewellery sizes start at 1 inch; shop labels go up to 4.1 inch, so pricing and identity can be updated digitally instead of reprinting paper tags.",
    "Power and connectivity": "The smart plug and busbar system sit at the edge of the electrical installation. One adds IoT control at a socket; the other organises distribution — both belong in the same Karat Infinity product catalogue as the switches and fans.",
}

copied = []
lines = [
    "export type HardwareProduct = {",
    "  slug: string;",
    "  number: string;",
    "  title: string;",
    "  shortTitle: string;",
    "  category: string;",
    "  series: string;",
    "  description: string;",
    "  overview: string;",
    "  highlights: string[];",
    "  image: string;",
    "};",
    "",
    "export const productCategories = [",
    "  'Smart switches',",
    "  'Touch panels',",
    "  'Magnetic+ glass',",
    "  'IoT fans',",
    "  'Kitchen appliances',",
    "  'Pump controllers',",
    "  'e-Label displays',",
    "  'Power and connectivity',",
    "] as const;",
    "",
    "export const hardwareProducts: HardwareProduct[] = [",
]

for number, slug, title, short, category, series, description in products:
    excel_row = number + 1
    filename = row_img[excel_row]
    ext = os.path.splitext(filename)[1].lower()
    dest_name = f"{slug}{ext}"
    shutil.copy2(os.path.join(src, filename), os.path.join(out, dest_name))
    copied.append((slug, dest_name, os.path.getsize(os.path.join(out, dest_name))))
    image = f"/products/{dest_name}"
    hs = highlights[category]
    hs_js = ", ".join(ts_str(h) for h in hs)
    lines.append("  {")
    lines.append(f"    slug: {ts_str(slug)},")
    lines.append(f"    number: '{number:02d}',")
    lines.append(f"    title: {ts_str(title)},")
    lines.append(f"    shortTitle: {ts_str(short)},")
    lines.append(f"    category: {ts_str(category)},")
    lines.append(f"    series: {ts_str(series)},")
    lines.append(f"    description: {ts_str(description)},")
    lines.append(f"    overview: {ts_str(overviews[category])},")
    lines.append(f"    highlights: [{hs_js}],")
    lines.append(f"    image: {ts_str(image)},")
    lines.append("  },")

lines.append("];")
lines.append("")
lines.append("export function getHardwareProduct(slug: string) {")
lines.append("  return hardwareProducts.find((product) => product.slug === slug);")
lines.append("}")
lines.append("")

lib_path = os.path.join(root, "lib", "products.ts")
with open(lib_path, "w", encoding="utf-8") as handle:
    handle.write("\n".join(lines))

print("products", len(copied))
print("wrote", lib_path)
